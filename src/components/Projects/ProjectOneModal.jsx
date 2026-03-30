import ProjectModalBase from './ProjectModal';

function ProjectOneModal({ onClose }) {
  return (
    <ProjectModalBase onClose={onClose}>
      <div className="modal__layout">
        <div className="modal__text">
          <h2>PelisFind</h2>

          <p>
            PelisFind es una aplicación web desarrollada con React + Vite que permite buscar, 
            explorar y ver informacion de tus peliculas favoritas usando la API de The Movie Database (TMDB).
            Incluye búsqueda en tiempo real, vista de detalle, trailer, reparto entre otras, lo desplegue 
            en produccion usando vercel.
          </p>

          <p>
            La aplicación fue hecha para el bootcamp TripleTen Full-stack WEB Developer. 
            El proyecto destaca las habilidades de desarrollo frontend, integración de API e 
            implementación y fue pensado para ofrecer una experiencia de usuario atractiva y funcional 
            mostrando la informacion e interatuar con los usaurios con la mejor experiencia posible.
          </p>

          <p>
            El proyecto fue diseñado con un enfoque en componentes reutilizables y una estructura 
            escalable aprendiendo sobre mi capacidad para crear, implementar e integrar aplicaciones 
            web modernas utilizando React + Vite, React Router DOM, API REST y CSS modular.
          </p>



        </div>

        <div className="modal__media">
          <img src="/images/project-pelisfind-1.png" alt="Vista principal" />
          <img src="/images/project-pelisfind-2.png" alt="Detalle película" />

          <a
            href="https://my-repository-pelis-find.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="modal__button"
          >
            Ver proyecto en producción
          </a>
        </div>
      </div>
    </ProjectModalBase>
  );
}

export default ProjectOneModal;
