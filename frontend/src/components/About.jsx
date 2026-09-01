import { useState, useEffect } from 'react';

function About() {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    fetch('/api/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch(() => {});
  }, []);

  const categories = Object.entries(skills);

  return (
    <section id="About">
      <h1>About Me!</h1>
      <div id="info">
        <p>
          Hi! I&apos;m a Marcy Lab School alumni, having graduated in August 2026 as a
          software engineer with the technical and problem-solving skills needed to create
          meaningful, real-world solutions.<br />
          I&apos;m naturally curious and driven by growth, so outside of coding I&apos;m always
          exploring new skills and creative outlets. I enjoy knitting, drawing, reading, and playing
          video games—activities that help me think creatively, stay patient, and approach challenges
          from different perspectives.<br />
          I&apos;m passionate about learning, improving, and using technology as a tool for impact.
          Whether I&apos;m debugging code or picking up a new hobby, I&apos;m always excited to grow
          and push my abilities further.
        </p>
      </div>

      {categories.length > 0 && (
        <div className="skills-grid">
          {categories.map(([category, names]) => (
            <div key={category} className="skill-group">
              <h3 className="skill-group-title">{category}</h3>
              <ul className="skill-chips">
                {names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default About;
