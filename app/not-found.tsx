import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DoodleDecorations } from "@/components/DoodleDecorations";
import { NotebookHoles } from "@/components/NotebookHoles";
import { CursorTrail } from "@/components/CursorTrail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Страница не найдена | traffic63",
  description: "К сожалению, запрашиваемая страница не существует.",
};

export default function NotFound() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      {/* Decorative Elements */}
      <NotebookHoles />
      <DoodleDecorations />
      <CursorTrail />

      <Header />

      <div className="not-found-wrapper">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>

          <div className="not-found-title-container">
            <h1 className="not-found-title">
              4<span>0</span>4
            </h1>
            <div className="not-found-underline"></div>

            {/* Tape decoration */}
            <div className="tape tape-right" style={{ bottom: '-10px', right: '-30px' }}></div>
          </div>

          <div>
            <div className="not-found-card" style={{ position: 'relative', zIndex: 1 }}>
              {/* Human character peeking above the top-right corner of the card */}
              <img
                src="/404_human_no_bg.png"
                alt="Sad human peeking"
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  right: '0px',
                  width: 'clamp(180px, 15vw, 240px)',
                  height: 'auto',
                  zIndex: 2,
                  transform: 'translateY(10%)',   /* опускаем вниз на 30% высоты картинки, чтобы персонаж "выглядывал" из-за края */
                  pointerEvents: 'none',
                  mixBlendMode: 'multiply',
                }}
              />
              <h2 className="not-found-subtitle">
                Ой! Страница потерялась...
              </h2>

              <p className="not-found-text">
                Похоже, вы забрели на страницу, которой не существует или она была перемещена.
                Возможно, мы уже работаем над её созданием!
              </p>

              <Link
                href="/"
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                <svg
                  style={{ width: 24, height: 24, transition: 'transform 0.3s' }}
                  className="back-arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Вернуться на главную</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
