import '../../styles/Portfolio.css'
export default function Portfolio() {
    return (
    <div className="portfolio">
      <div className="card">
        <img src="./src/assets/logo.png" alt="GameCoven" className="card-image" />
        <div className="card-content">
        <a href="https://github.com/AlirizaBagdat/Game-Coven"><h3>Project 1</h3></a>
        </div>
      </div>
      <div className="card">
        <img src="./src/assets/Disney3.png" alt="Disney" className="card-image" />
        <div className="card-content">
          <a href="https://github.com/simonmoore23/project-1-team-6Links to an external site."><h3>Project 2</h3></a>
        </div>
      </div>

    </div>
  );
}