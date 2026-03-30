import { useState } from 'react';
import ProjectCard from './projectCard';

import ProjectOneModal from './ProjectOneModal.jsx';
import ProjectTwoModal from './ProjectTwoModal.jsx';
import ProjectThreeModal from './ProjectThreeModal.jsx';

import './projects.css';

function Projects() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <section className="projects" id="projects">
        <div className="projects__container">
          <h2 className="projects__title">Proyectos destacados</h2>

          <div className="projects__grid">
            <ProjectCard
              title="PelisFind"
              description="Buscador de películas con React y API externa. Muestra los ultimos 
                           estrenos de peliculas con sus elencos"
              image="/images/project-movies.jpg"
              onClick={() => setActiveModal('project1')}
            />

            <ProjectCard
              title="Alrededor de los EE.UU"
              description="Aplicacion de de suscripción de usuarios para  exposicion de imagenes"
              image="/images/project-alrededoreu-1.png"
              onClick={() => setActiveModal('project2')}
            />

            <ProjectCard
              title="Cafetería"
              description="Pagina web para una cafetería, mostrando sus productos y facilitando el contacto con los clientes."
              image="/images/project-Cafeteria-1.png"
              onClick={() => setActiveModal('project3')}
            />
          </div>
        </div>
      </section>

      {activeModal === 'project1' && (
        <ProjectOneModal onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'project2' && (
        <ProjectTwoModal onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'project3' && (
        <ProjectThreeModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}

export default Projects;
