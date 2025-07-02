import Image from 'next/image';

export default function HomePage() {
  return (
    // main tag is already in Layout, so we can use a fragment or a div if needed for styling
    <>
      <section className="intro">
        <div className="profile">
          <Image src="/Assets/ProfilePic.jpg" alt="Profile Picture" className="profile-img" width={150} height={150} />
          <div className="intro-text">
            <h1>Hey, I&apos;m Tharusha Lakshan 👋</h1>
            <p>I&apos;m a Game developer/designer and Web developer.</p>
          </div>
        </div>
      </section>

      <section className="achievements">
        <h2>Achievements and Educational qualifications </h2>
        <p>Here are some of my most notable honors and achievements in the ICT sector.</p>
        <div className="achievement-cards">
          <div className="card">
            <h3>Educational</h3>
            <p>G.C.E. Ordinary Level (O/L) – Completed</p>
            <p>G.C.E. Advanced Level (A/L) – Completed in Maths Stream</p>
            <p>BSc (Hons) Computer Science – Currently pursuing at the University of Westminster</p>
          </div>
          <div className="card">
            <h3>Achievement 2</h3>
            <p>Description of achievement 2</p>
          </div>
          <div className="card">
            <h3>Achievement 3</h3>
            <p>Description of achievement 3</p>
          </div>
        </div>
      </section>

      <section className="Social-Media">
        <h3>Connect with me on Social Media</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tharusha-gnanawardana/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Image src="/Assets/Linkdein.png" alt="LinkedIn" className="LinkdIn-icon" width={32} height={32} />
          </a>
          <a href="https://discord.com/users/tharusha90095732" target="_blank" rel="noopener noreferrer" className="social-link">
            <Image src="/Assets/Discord.png" alt="Discord" className="Discord-icon" width={32} height={32} />
          </a>
          <a href="https://github.com/tharusha9009" target="_blank" rel="noopener noreferrer">
            <Image src="/Assets/Git.png" alt="GitHub" className="GitHub-icon" width={32} height={32} />
          </a>
        </div>
      </section>
    </>
  );
}
