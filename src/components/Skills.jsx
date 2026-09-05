const frontendSkills = [
  { name: "HTML", desc: "Structure", width: "90%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", cls: "card-html" },
  { name: "CSS", desc: "Styling", width: "90%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", cls: "card-css" },
  { name: "JavaScript", learning: true, width: "70%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", cls: "card-js" },
  { name: "React", learning: true, desc: "UI Framework", width: "20%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", cls: "card-react" },
  { name: "Vue", learning: true, width: "50%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", cls: "card-vue" },
  { name: "TypeScript", learning: true, width: "20%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", cls: "card-typescript" }
];

const backendSkills = [
  { name: "PHP", learning: true, width: "35%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", cls: "card-php" },
  { name: "C#", desc: "OOP", width: "65%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", cls: "card-csharp" },
  { name: "MySQL", learning: true, width: "39%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", cls: "card-mysql" }
];

const toolSkills = [
  { name: "Git", desc: "Version Control", width: "26%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", cls: "card-git" },
  { name: "VS Code", desc: "Source Editor", width: "100%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", cls: "card-vscode" },
  { name: "Visual Studio", desc: "IDE", width: "80%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg", cls: "card-visualstudio" },
  { name: "GitHub", desc: "Repository Hosting", width: "80%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", cls: "card-github" },
  { name: "Figma", desc: "UI/UX Design", width: "20%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", cls: "card-figma" }
];

function SkillGrid({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.name} className={`card ${skill.cls}`}>
          <img src={skill.icon} alt={`${skill.name} Icon`} className="card-icon" />
          <p className="heading">{skill.name}</p>
          {skill.learning && <p className="learning-text">Learning</p>}
          {skill.desc && <p className="card-desc">{skill.desc}</p>}
          <div className="progress-bar-container">
            <div className="progress-line" style={{ width: skill.width }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-wrapper two-columns">
        <div className="skills-column">
          <h2>Front-End</h2>
          <SkillGrid skills={frontendSkills} />
        </div>

        <div className="skills-column">
          <h2>Back-End</h2>
          <SkillGrid skills={backendSkills} />
        </div>

        <div className="skills-column">
          <h2>Tools</h2>
          <SkillGrid skills={toolSkills} />
        </div>
      </div>
    </section>
  );
}