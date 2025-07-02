// portfolio-nextjs/src/app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me - TharushaL.dev",
  description: "Learn more about Tharusha Lakshan, a game programmer and web developer.",
};

export default function AboutPage() {
  return (
    <div className="about-content"> {/* Assuming 'about-content' is styled for centering/padding */}
      <h1>About Me</h1>
      <p>Hello, I&apos;m Tharusha, a game programmer and web developer. I specialize in creating interactive experiences and web applications.</p>
      <p>I&apos;m good at,</p>
      <div className="skills">
        <span className="skill-tag">Game Development</span>
        <span className="skill-tag">Web Development</span>
        <span className="skill-tag">JavaScript</span>
        <span className="skill-tag">HTML/CSS</span>
        <span className="skill-tag">Unity</span>
        <span className="skill-tag">C#</span>
        <span className="skill-tag">React</span>
        <span className="skill-tag">Node.js</span>
      </div>
      <a href="/CV.pdf" className="cv-button" download>Download CV ⬇️</a> {/* Update href with actual CV path later e.g. /Assets/CV.pdf and place CV in public/Assets */}
    </div>
  );
}
