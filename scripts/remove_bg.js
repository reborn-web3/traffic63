const Jimp = require('jimp');

async function removeWhiteBg(input, output) {
  try {
    const image = await Jimp.read(input);
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    image.rgba(true);
    
    const visited = new Uint8Array(w * h);
    const queue = [];
    
    const push = (x, y) => {
      if (x < 0 || x >= w || y < 0 || y >= h) return;
      const idx = y * w + x;
      if (visited[idx]) return;
      
      const pIdx = idx * 4;
      const r = image.bitmap.data[pIdx];
      const g = image.bitmap.data[pIdx+1];
      const b = image.bitmap.data[pIdx+2];
      
      // Threshold for background
      if (r > 210 && g > 210 && b > 210) {
        visited[idx] = 1;
        queue.push({x, y});
      }
    };
    
    push(0, 0);
    push(w-1, 0);
    push(0, h-1);
    push(w-1, h-1);
    
    let head = 0;
    while (head < queue.length) {
      const {x, y} = queue[head++];
      const idx = (y * w + x) * 4;
      image.bitmap.data[idx + 3] = 0; // Set alpha to 0
      
      push(x+1, y);
      push(x-1, y);
      push(x, y+1);
      push(x, y-1);
    }
    
    await image.writeAsync(output);
    console.log("Processed " + output);
  } catch (e) {
    console.error(e);
  }
}

Promise.all([
  removeWhiteBg('public/images/cards/website3.jpg', 'public/images/cards/website_nobg.png'),
  removeWhiteBg('public/images/cards/ads3.jpg', 'public/images/cards/ads_nobg.png'),
  removeWhiteBg('public/images/cards/crm3.jpg', 'public/images/cards/crm_nobg.png')
]).then(() => console.log('All done'));
