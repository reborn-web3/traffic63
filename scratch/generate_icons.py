import os
from PIL import Image, ImageDraw, ImageFont

def generate_icons():
    # Setup paths
    font_path = "/System/Library/Fonts/Supplemental/Georgia Bold Italic.ttf"
    if not os.path.exists(font_path):
        # Fallback to standard Georgia if Bold Italic is not at the exact path
        font_path = "/System/Library/Fonts/Supplemental/Georgia.ttf"
        
    print(f"Using font: {font_path}")
    
    # Base size for master PNG
    base_size = 512
    img = Image.new("RGBA", (base_size, base_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Dynamically find the right font size to fit the text in 85% of the canvas width
    target_width = base_size * 0.85
    start_font_size = 200
    try:
        temp_font = ImageFont.truetype(font_path, start_font_size)
    except IOError:
        temp_font = ImageFont.load_default()
        
    temp_width = draw.textlength("t63", font=temp_font)
    font_size = int(start_font_size * (target_width / temp_width))
    print(f"Calculated font size: {font_size}")
    
    font = ImageFont.truetype(font_path, font_size)
    
    # Measure final text metrics for separate drawing
    t_width = draw.textlength("t", font=font)
    six_width = draw.textlength("6", font=font)
    three_width = draw.textlength("3", font=font)
    total_width = t_width + six_width + three_width
    
    bbox = draw.textbbox((0, 0), "t63", font=font)
    text_height = bbox[3] - bbox[1]
    
    print(f"Final t_width: {t_width}, six_width: {six_width}, three_width: {three_width}")
    print(f"total_width: {total_width}, text_height: {text_height}")
    
    # Centering positions
    x_start = (base_size - total_width) / 2
    # Italic font visual shift: since it leans right, shift left slightly
    italic_adjustment = -12
    x_start += italic_adjustment
    
    y_start = (base_size - text_height) / 2 - bbox[1]
    
    # Color definitions
    # User requested pure black for 't'
    t_color = (0, 0, 0, 255)          # #000000 (pure black)
    num_color = (37, 99, 235, 255)    # #2563eb (blue)
    
    # Shift '3' upward to align with baseline of '6'
    # Based on font metrics, the bottom of '3' is lower than '6' by exactly 16% of the font size.
    three_y_offset = -int(font_size * 0.16)
    print(f"Applying three_y_offset: {three_y_offset} pixels")
    
    # Draw "t", "6", and "3" (shifted)
    draw.text((x_start, y_start), "t", font=font, fill=t_color)
    draw.text((x_start + t_width, y_start), "6", font=font, fill=num_color)
    draw.text((x_start + t_width + six_width, y_start + three_y_offset), "3", font=font, fill=num_color)
    
    # Make sure output directories exist
    os.makedirs("public", exist_ok=True)
    os.makedirs("app", exist_ok=True)
    
    # Save standard PNGs
    sizes = [16, 32, 48, 120, 180, 192, 512]
    png_images = {}
    for size in sizes:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        png_images[size] = resized
        if size == 180:
            # Apple touch icon with solid white background
            apple_img = Image.new("RGBA", (180, 180), (255, 255, 255, 255))
            apple_img.alpha_composite(resized)
            apple_img.convert("RGB").save("public/apple-touch-icon.png", "PNG")
            print("Saved public/apple-touch-icon.png")
        else:
            resized.save(f"public/favicon-{size}x{size}.png", "PNG")
            print(f"Saved public/favicon-{size}x{size}.png")
            
    # Save the multi-resolution ICO file at public/favicon.ico and app/favicon.ico
    ico_sizes = [16, 32, 48]
    ico_imgs = [png_images[size] for size in ico_sizes]
    
    ico_imgs[0].save(
        "public/favicon.ico",
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_imgs[1:]
    )
    print("Saved public/favicon.ico")
    
    ico_imgs[0].save(
        "app/favicon.ico",
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_imgs[1:]
    )
    print("Saved app/favicon.ico")
    
    # 2. Generate public/favicon.svg
    # It contains vector SVG with responsive dark/light color scheme
    # We shift the '3' up by dy="-0.16em" to align with baseline of '6'
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <style>
    .logo-text {
      font-family: Georgia, serif;
      font-weight: 900;
      font-style: italic;
      font-size: 200px;
    }
    .t {
      fill: #000000;
    }
    .num {
      fill: #2563eb;
    }
    @media (prefers-color-scheme: dark) {
      .t {
        fill: #ffffff;
      }
    }
  </style>
  <text x="48%" y="58%" dominant-baseline="middle" text-anchor="middle" class="logo-text">
    <tspan class="t">t</tspan><tspan class="num">6</tspan><tspan class="num" dy="-0.16em">3</tspan>
  </text>
</svg>
"""
    with open("public/favicon.svg", "w") as f:
        f.write(svg_content)
    print("Saved public/favicon.svg")

if __name__ == "__main__":
    generate_icons()
