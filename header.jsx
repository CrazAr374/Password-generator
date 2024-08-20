const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Atharva</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/atharva-rahate-272390269/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/atharva_rahate_374/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://linktr.ee/atharva374" target="_blank" rel="noopener noreferrer">Linktree</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.hackerrank.com/profile/atharva_rahate31" target="_blank" rel="noopener noreferrer">HackerRank</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/CrazAr374" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;