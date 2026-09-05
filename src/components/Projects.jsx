import { useState } from "react";

const projectItems = [
  {
    title: "Portfolio Website",
    category: "htmlcss",
    desc: "Showcase of my web development skills and projects.",
    img: `${import.meta.env.BASE_URL}portfolioGil.png`,
    link: "https://gilcrpz.github.io/PtWebProg-github.io/"
  },
  {
    title: "Workease Admin (WPF)",
    category: "csharp",
    desc: "Desktop app for managing CDW operations. Built with C# and WPF.",
    img: `${import.meta.env.BASE_URL}Workease.png`,
    link: "https://github.com/nier0207-csharpprog.finalproject.workeaseapp.wpf"
  },
  {
    title: "Kusina ni Venus",
    category: "Vue",
    desc: "A web-based ordering and showcase app for classic Filipino comfort food, built with Vue.",
    img: `${import.meta.env.BASE_URL}KusinaniVenus.png`,
    link: "https://gilcrpz.github.io/kusina-ni-venus/"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projectItems
      : projectItems.filter((item) => item.category === filter);

  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("htmlcss")}>HTML/CSS/JavaScript</button>
        <button onClick={() => setFilter("csharp")}>C# / .NET</button>
        <button onClick={() => setFilter("Vue")}>Vue</button>
      </div>

      <div className="projects-grid">
        {filtered.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <div className="project-card">
              <div className="project-img-container">
                <img src={item.img} alt={item.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}