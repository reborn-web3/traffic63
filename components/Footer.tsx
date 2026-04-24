import Link from "next/link";
import { navigationLinks } from "@/lib/data";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-footer">
      {/* Decorative Stickers/Doodles */}
      <div className="footer-sticker sticker-1">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.1 }}>
          <path d="M10 60C10 32.3858 32.3858 10 60 10C87.6142 10 110 32.3858 110 60C110 87.6142 87.6142 110 60 110C32.3858 110 10 87.6142 10 60Z" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M40 40L80 80M80 40L40 80" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="footer-sticker sticker-2">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.1 }}>
          <path d="M20 20L80 80M80 20L20 80" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="4" />
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link href="/#hero" className="footer-logo">
              traffic<span>63</span>
            </Link>
            <p className="footer-description">
              Performance-агентство, которое говорит на языке цифр. Рисуем стратегии роста и воплощаем их в жизнь с 2018 года.
            </p>
            <div className="footer-socials">
              <SocialIcon href="https://t.me/traffic63" icon="telegram" />
              <SocialIcon href="#" icon="vk" />
              <SocialIcon href="#" icon="whatsapp" />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-column">
            <h4>Компания</h4>
            <ul className="footer-links-list">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/#contact" className="footer-link">Обсудить проект</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>Услуги</h4>
            <ul className="footer-links-list">
              <li><Link href="/#services" className="footer-link">Контекстная реклама</Link></li>
              <li><Link href="/#services" className="footer-link">Таргетированная реклама</Link></li>
              <li><Link href="/#services" className="footer-link">SEO‑продвижение</Link></li>
              <li><Link href="/#services" className="footer-link">Создание сайтов</Link></li>
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div className="footer-column">
            <h4>Контакты</h4>
            <div className="footer-contact-info">
              <a href="tel:+79991234567" className="footer-phone">
                +7 (999) 123-45-67
              </a>
              <a href="mailto:hello@traffic63.ru" className="footer-email">
                hello@traffic63.ru
              </a>
              <div className="footer-office">
                <p className="footer-office-label">Офис в Самаре</p>
                <p className="footer-office-address">ул. Ново-Садовая, 106, офис 402</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} traffic63 — Performance-агентство.
          </div>
          <div className="legal-links">
            <Link href="/privacy" className="legal-link">Политика конфиденциальности</Link>
            <Link href="/terms" className="legal-link">Публичная оферта</Link>
          </div>
          <div className="made-with">
            Нарисовано с любовью <span className="heart">💙</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => {
  const icons: Record<string, JSX.Element> = {
    telegram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-2.04 1.29-5.73 3.79-.54.37-1.03.55-1.47.54-.48-.01-1.41-.27-2.09-.49-.84-.27-1.5-.42-1.44-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.5.16.13.1.17.24.18.35.01.08 0 .25-.01.32z"/>
      </svg>
    ),
    vk: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.162 18.994c.609 0 .858-.406.858-.826 0-.733-.031-1.322-.031-1.877 0-.939.447-1.402.927-1.402.384 0 .737.222 1.05.688.369.548.818 1.583 1.265 2.426.33.623.826.991 1.27.991h2.17c.131 0 .236-.104.236-.233 0-.174-.047-.344-.136-.487-.129-.207-.585-.933-1.287-2.04-.335-.523-.733-1.144-.733-1.617 0-.422.312-.733.674-1.097 1.238-1.246 2.503-2.52 2.503-3.663 0-.703-.343-1.024-.915-1.024h-2.107c-.124 0-.224.1-.224.224 0 .359.06.711.178 1.04.144.404.339.78.583 1.12.3.414.611.815.611 1.221 0 .445-.371.741-.741.741-.302 0-.61-.176-.9-.518-.362-.435-.714-1.323-.714-2.205 0-.677.302-1.04.814-1.04h-2.16c-.131 0-.236.105-.236.236 0 .344.022.688.063 1.03.069.59.132 1.18.132 1.77 0 .615-.225.815-.45.815-.316 0-.6-.32-.882-.733-.404-.59-.724-1.503-.724-2.417 0-.464.21-.691.541-.691h-2.02c-.13 0-.236.105-.236.236 0 .54.086 1.074.254 1.583.52 1.573 1.486 2.946 2.766 3.931.338.259.507.52.507.779 0 .406-.356.609-.722.609-.315 0-.623-.114-.833-.314-1.32-1.27-2.316-2.85-2.891-4.591-.063-.19-.24-.316-.439-.316H3.333c-.11 0-.2.09-.2.2 0 .196.023.393.069.585.872 3.647 3.333 9.488 9.96 9.488z"/>
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.508 0-9.988 4.48-9.988 9.988 0 1.76.459 3.413 1.264 4.853L2 22l5.307-1.392c1.387.755 2.965 1.187 4.64 1.187 5.507 0 9.987-4.479 9.987-9.988 0-5.508-4.48-9.988-9.988-9.988zm5.292 13.52c-.225.63-.872 1.157-1.42 1.248-.547.091-1.257.165-3.51-.776-2.253-.94-3.713-3.233-3.826-3.382-.113-.15-.92-1.226-.92-2.337 0-1.11.584-1.654.811-1.88.225-.226.49-.283.653-.283.164 0 .327.001.469.008.148.007.348-.056.545.422.197.477.675 1.64.731 1.753.057.113.094.245.019.396-.075.15-.113.245-.226.377-.113.132-.238.293-.34.396-.113.113-.23.237-.098.463.132.226.586.963 1.262 1.564.873.777 1.611 1.018 1.838 1.13.226.113.358.094.49-.057.132-.15.565-.66.716-.886.15-.226.301-.188.508-.113.207.075 1.317.62 1.543.733.226.113.376.17.432.263.056.094.056.546-.169 1.176z"/>
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-item"
    >
      {icons[icon] || null}
    </a>
  );
};
