import "./styles.css";
import Image from "next/image";

export const HeroProject = () => {
  return (
    <section className="hero-section">
      <div className="portfolio-project">
        <Image src="/imgs/project-title.png" alt="Project" width={636} height={150} />
      </div>
    </section>
  );
}
