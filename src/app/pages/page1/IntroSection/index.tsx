import "./styles.css";
import Image from "next/image";

export const IntroSection = () => {
  return (
    <section className="intro-section">
      <Image src="/imgs/intro-title.png"  alt="Portfolio" width={1212} height={155} />
      
      <p className="intro-subtitle ">
        Web Designer apaixonada por criar experiências visuais que conectam e
        inspiram.
      </p>
      
      <div className="intro-description">
        <div className="rob-avatar-foto">
        <Image src="/imgs/img-robin-coisada.png" alt="Foto de Rob" width={272} height={272} />
        </div>
        <div className="description-p">
        <p>
          Tenho talento para unir estética e funcionalidade que capturam a
          essência de uma marca. É com experiência de verdade que valorizo as
          necessidades do projeto, desde o entendimento até o refinamento
          visual. Com sensibilidade e técnica, busco traduzir emoções em design.
        </p>
        </div>
      </div>
    </section>
  );
};
