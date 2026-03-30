import ProjectModalBase from './ProjectModal';

function ProjectOneModal({ onClose }) {
  return (
    <ProjectModalBase onClose={onClose}>
      <div className="modal__layout">
        <div className="modal__text">
          <h2>Cafeteria</h2>

          <p>
            Projecto creado con HTML y CSS, se ajusta a las especificaciones de diseño del cliente 
            y sigue la metodología BEM para obtener un código estructurado lo que ayudó a mantener 
            las clases claras, fáciles de reutilizar y escalables. El diseño fue planteado para que 
            la navegación fuera sencilla y agradable, siguiendo buenas prácticas de estructura web.
          </p>

          <p>
            ste proyecto fue pensado como una página web para una cafetería, con la idea de mostrar 
            sus productos y facilitar el contacto con los clientes. La estructura principal incluye 
            un header de bienvenida con un menú de navegación que guía al usuario por toda la página, 
            una sección de muestras donde se destacan las bebidas y postres, un formulario para realizar 
            encargos, y un footer con la información de contacto y redes sociales.
          </p>

          <p>
            Este proyecto destaca mis habilidades básicas en HTML y CSS, y muestra mi capacidad para 
            crear páginas web estructuradas, responsivas y visualmente atractivas. Siguiendo la 
            metodología BEM y aprovechando herramientas como GitHub para el control de versiones.
          </p>



        </div>

        <div className="modal__media">
          <img src="/images/project-Cafeteria-1.png" alt="Vista principal" />
          <img src="/images/project-Cafeteria-2.png" alt="Detalle" />

          <a
            href="https://my-repository-two-bice.vercel.app/"
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
