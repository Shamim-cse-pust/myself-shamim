import React from "react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "<i class='devicon-python-plain'></i>",
    skills: [
      { name: "C", icon: "<i class='devicon-c-plain'></i>" },
      { name: "C++", icon: "<i class='devicon-cplusplus-plain'></i>" },
      { name: "Java", icon: "<i class='devicon-java-plain'></i>" },
      { name: "Python", icon: "<i class='devicon-python-plain'></i>" },
      { name: "PHP", icon: "<i class='devicon-php-plain'></i>" },
      { name: "Go", icon: "<i class='devicon-go-plain'></i>" },
      { name: "C#", icon: "<i class='devicon-csharp-plain'></i>" },
      { name: "Assembly", icon: null },
    ],
  },
  {
    category: "Web Technologies",
    icon: "<i class='devicon-html5-plain'></i>",
    skills: [
      { name: "HTML", icon: "<i class='devicon-html5-plain'></i>" },
      { name: "CSS", icon: "<i class='devicon-css3-plain'></i>" },
      { name: "JavaScript", icon: "<i class='devicon-javascript-plain'></i>" },
      { name: "Bootstrap", icon: "<i class='devicon-bootstrap-plain'></i>" },
      { name: "PHP", icon: "<i class='devicon-php-plain'></i>" },
      { name: "Node.js", icon: "<i class='devicon-nodejs-plain'></i>" },
      { name: "FastAPI", icon: "<i class='devicon-fastapi-plain'></i>" },
      { name: "Laravel", icon: "<i class='devicon-laravel-plain'></i>" },
      { name: "Django", icon: "<i class='devicon-django-plain'></i>" },
      { name: "Next.js", icon: "<i class='devicon-nextjs-plain'></i>" },
      { name: "React", icon: "<i class='devicon-react-original'></i>" },
      {
        name: "Machine Learning",
        icon: "<i class='devicon-tensorflow-original'></i>",
      },
      {
        name: "Deep Learning",
        icon: "<i class='devicon-tensorflow-original'></i>",
      },
      { name: "RabbitMQ", icon: "<i class='devicon-rabbitmq-plain'></i>" },
      { name: "Talinwood", icon: null },
    ],
  },
  {
    category: "Databases",
    icon: "<i class='devicon-mysql-plain'></i>",
    skills: [
      { name: "MySQL", icon: "<i class='devicon-mysql-plain'></i>" },
      { name: "PostgreSQL", icon: "<i class='devicon-postgresql-plain'></i>" },
      { name: "SQLite", icon: "<i class='devicon-sqlite-plain'></i>" },
      { name: "Redis", icon: "<i class='devicon-redis-plain'></i>" },
    ],
  },
  {
    category: "Development Tools",
    icon: "<i class='devicon-vscode-plain'></i>",
    skills: [
      { name: "VS Code", icon: "<i class='devicon-vscode-plain'></i>" },
      { name: "PyCharm", icon: "<i class='devicon-pycharm-plain'></i>" },
      { name: "PhpStorm", icon: "<i class='devicon-phpstorm-plain'></i>" },
      {
        name: "Jupyter Notebook",
        icon: "<i class='devicon-jupyter-plain'></i>",
      },
      { name: "Code Blocks", icon: "<i class='devicon-c-plain'></i>" },
      { name: "Eclipse", icon: "<i class='devicon-eclipse-plain'></i>" },
      { name: "Git Bash", icon: "<i class='devicon-git-plain'></i>" },
      { name: "Linux Shell", icon: "<i class='devicon-linux-plain'></i>" },
    ],
  },
  {
    category: "Testing & Debugging",
    icon: "<i class='devicon-jest-plain'></i>",
    skills: [
      { name: "Postman", icon: "<i class='devicon-postman-plain'></i>" },
      { name: "Jest", icon: "<i class='devicon-jest-plain'></i>" },
      { name: "Pytest", icon: "<i class='devicon-pytest-plain'></i>" },
      { name: "PHPUnit", icon: null },
    ],
  },
  {
    category: "Operating Systems",
    icon: "<i class='devicon-windows8-original'></i>",
    skills: [
      { name: "Windows", icon: "<i class='devicon-windows8-original'></i>" },
      { name: "Mac", icon: "<i class='devicon-apple-original'></i>" },
      {
        name: "Linux (Ubuntu, Debian)",
        icon: "<i class='devicon-ubuntu-plain'></i>",
      },
    ],
  },
  {
    category: "Version Control",
    icon: "<i class='devicon-git-plain'></i>",
    skills: [
      { name: "Git", icon: "<i class='devicon-git-plain'></i>" },
      { name: "GitHub", icon: "<i class='devicon-github-original'></i>" },
      { name: "GitLab", icon: "<i class='devicon-gitlab-plain'></i>" },
    ],
  },
  {
    category: "Deployment & DevOps",
    icon: "<i class='devicon-docker-plain'></i>",
    skills: [
      { name: "Docker", icon: "<i class='devicon-docker-plain'></i>" },
      { name: "Heroku", icon: "<i class='devicon-heroku-original'></i>" },
      { name: "GitHub", icon: "<i class='devicon-github-original'></i>" },
      { name: "Netlify", icon: "<i class='devicon-netlify-plain'></i>" },
      { name: "Vercel", icon: "<i class='devicon-vercel-plain'></i>" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills common">
      <h2>Technical Skills</h2>
      {skillCategories.map((cat) => (
        <div
          key={cat.category}
          style={{ width: "100%", marginBottom: "2.5rem" }}
        >
          <div className="skills-category-header">
            {cat.icon && (
              <span
                className="skill-icon category-icon"
                dangerouslySetInnerHTML={{ __html: cat.icon }}
              />
            )}
            <span className="skills-category-title">{cat.category}</span>
          </div>
          <ul className="skills-grid">
            {cat.skills.map((skill) => (
              <li key={skill.name} className="skill-box">
                {skill.icon ? (
                  <div
                    className="skill-icon"
                    dangerouslySetInnerHTML={{ __html: skill.icon }}
                  />
                ) : (
                  <div
                    className="skill-icon"
                    style={{ fontSize: "2.1rem", color: "#b2b7d0" }}
                  >
                    {skill.name[0]}
                  </div>
                )}
                <div className="skill-title">{skill.name}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
