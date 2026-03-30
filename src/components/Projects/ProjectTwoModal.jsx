import ProjectModalBase from './ProjectModal.jsx';

function ProjectOneModal({ onClose }) {
  return (
    <ProjectModalBase onClose={onClose}>
      <div className="modal__layout">
        <div className="modal__text">
          <h2>Alrededor de los EE.UU</h2>

          <p>
            Este proyecto es una aplicación web full-stack alojada en Google Cloud y vinculada a 
            un dominio FreeDNS. Incluye la implementación tanto del frontend como del backend del sitio. 
            El frontend, creado con React, se encarga del registro de usuarios, la autenticación y la 
            gestión de tokens, mientras que el backend, impulsado por Express.js y MongoDB, proporciona 
            una API RESTful para los datos de los usuarios y las tarjetas. La aplicación está protegida 
            con SSL y utiliza prácticas de desarrollo modernas.
          </p>

          <p>
            La aplicación fue desarrollada utilizando React para la construcción de la interfaz de 
            usuario, aprovechando su capacidad para crear componentes reutilizables y gestionar el 
            estado de la aplicación de manera eficiente. Además, se integró una API externa para 
            manejar el almacenamiento y recuperación de las imágenes, asegurando que los datos 
            se mantuvieran persistentes entre sesiones.
          </p>

          <p>
            El proyecto fue diseñado con un enfoque en componentes React reutilizables y escalables 
            aprendiendo sobre la libreria de React utilizando React + Vite, React Router DOM y Metodologia BEM
            para la organización del CSS.
          </p>



        </div>

        <div className="modal__media">
          <img src="/images/project-alrededoreu-1.png" alt="Vista principal" />
          <img src="/images/project-alrededoreu-2.png" alt="Detalle" />

          <a
            href="https://apifull.bad.mn/"
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
