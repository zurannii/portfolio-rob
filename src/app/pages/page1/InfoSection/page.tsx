import "./styles.css"

export const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-column">
        <h3 className="info-title">Educação Acadêmica</h3>
        <ul>
          <li>
            <strong>Universidade Católica de Pernambuco</strong>
            <br />
            Superior em Sistemas para Internet
            <br />
            <span className="period">2024 – 2026</span>
          </li>
          <li>
            <strong>Anhanguera Educacional</strong>
            <br />
            Superior em Design Gráfico
            <br />
            <span className="period">2023 – 2025</span>
          </li>
          <li>
            <strong>Decolar Tech 2025</strong>
            <br />
            DIO & Avanade
            <br />
            <span className="period">Início em mar. de 2025</span>
          </li>
          <li>
            <strong>Bootcamp 2025 – UX</strong>
            <br />
            AvanTI
            <br />
            <span className="period">06/25 – 07/25</span>
          </li>
        </ul>

        <h3 className="info-title">Technical Skills</h3>
        <div className="skills">
          <div>
            <h4>Software</h4>
            <p>Figma • Illustrator • Photoshop • Canva • Capcut • Videoleap</p>
          </div>
          <div>
            <h4>Code</h4>
            <p>React • Angular • Typescript • Java • Node.js • Python</p>
          </div>
        </div>
      </div>

      <div className="info-column">
        <h3 className="info-title">Soft Skills</h3>
        <ul>
          <li>Resiliência • Criatividade • Proatividade</li>
          <li>Empatia • Análise Crítica • Autodidata</li>
        </ul>

        <h3 className="info-title">Idiomas</h3>
        <ul className="language-list">
          <li>
            <strong>Português:</strong> 🇧🇷
          </li>
          <li>
            <strong>Inglês:</strong> ——
          </li>
          <li>
            <strong>Espanhol:</strong> ——
          </li>
        </ul>

        <h3 className="info-title">Interesses</h3>
        <ul>
          <li>Ouvir música • Cozinhar • Hackathons</li>
          <li>Animais • Fotografar</li>
        </ul>
      </div>
    </section>
  );
};
