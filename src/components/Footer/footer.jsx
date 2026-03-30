// components/Footer/Footer.jsx
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__name">Juan Antonio Morales Balderas</h3>
        <p className="footer__role">Desarrollador Web · React</p>

        <div className="footer__links">
          <a href="https://github.com/JuanAntonio64">
            GitHub
          </a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/morales-balderas" >
            LinkedIn
          </a>
        </div>

        <span className="footer__copy">
          © 2026 · Portafolio de evidencias 
        </span>
      </div>
    </footer>
  );
}

export default Footer;
