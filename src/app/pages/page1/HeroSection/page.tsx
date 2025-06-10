import "./styles.css";
import Image from "next/image";
import { Button } from "@/components/Button";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="portfolio-title">
        <Image src="/imgs/portfolio-title.png" alt="Portfolio" width={636} height={150} />
      </div>

      <p className="subtitle">
        Onde o design encontra as estrelas e nasce a sua história guiada por
        experiências.
      </p>
      <div className="hero-buttons">
        <a href="#intro-section">
          <Button
            type="primary"
            action={() => {
              alert("Executa uma função aqui");
            }}
          >
            Sobre mim
          </Button>
        </a>
        <Button
          type="secondary"
          action={() => {
            alert("Executa uma função aqui");
          }}
        >
          Projetos
        </Button>
        <div className="section-img"></div>
      </div>
    </section>
  );
};
