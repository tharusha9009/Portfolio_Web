// portfolio-nextjs/src/app/projects/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Projects - TharushaL.dev",
  description: "Explore projects by Tharusha Lakshan.",
};

export default function ProjectsPage() {
  return (
    <section className="projects"> {/* Assuming 'projects' is styled for layout/padding */}
      <h1>My Projects</h1>
      <div className="achievement-cards"> {/* Reusing 'achievement-cards' class, consider renaming if styles differ significantly */}
        <div className="card">
          <h3>Project 1</h3>
          <p>Description of project 1</p>
        </div>

        <div className="card">
          <h3>Project 2</h3>
          <p>Description of project 2</p>
        </div>

        <div className="card">
          <h3>Project 3</h3>
          <p>Description of project 3</p>
        </div>
      </div>
    </section>
  );
}
