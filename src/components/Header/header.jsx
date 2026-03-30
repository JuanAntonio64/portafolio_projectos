import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <span className="header__logo">👽</span>

        <nav className="header__nav">
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#about">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
