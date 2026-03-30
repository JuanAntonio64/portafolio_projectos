// components/Projects/ProjectCard.jsx
import './projectCard.css';

function ProjectCard({ title, description, image, onClick  }) {
  return (
    <article className="project-card" onClick={onClick}>
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
