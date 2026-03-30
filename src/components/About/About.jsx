// components/About/About.jsx
import './about.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Sobre mí</h2>

          <p>
            Soy Ingeniero en Sistemas Computacionales con formación en desarrollo Full-Stack. 
            He trabajado con React, HTML5, CSS3, JavaScript, Next.js y Express,js construyendo 
            interfaces modernas y responsivas.
          </p>

          <p>
            Uno de mis principales objetivos profesionales es seguir perfeccionando mis habilidades 
            técnicas, explorando nuevas bibliotecas y frameworks que mejoren especialidad y mi trabajo. 
            Me motiva enfrentarme a desafíos donde pueda aplicar lo que sé, pero también aprender 
            algo nuevo en el proceso. Disfruto especialmente del trabajo en equipo, porque creo que 
            la colaboración impulsa tanto la calidad de los proyectos como el crecimiento individual.
          </p>

          <p className="modal__button">
            moralestono6@gmail.com
          </p>
        </div>

        <div className="about__image">
          <img
            src="/images/About.jpeg"
            alt="Foto de Juan"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
