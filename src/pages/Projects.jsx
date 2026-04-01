import { projects } from '../data';
import useReveal from '../components/useReveal';
import './Projects.css';

function ProjectBlock({ project, delay }) {
  const ref = useReveal();
  return (
    <div className="reveal project-block" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="project-block__top">
        <span className="project-block__num">{String(project.id).padStart(2, '0')}</span>
        <span className={`status-badge ${project.status === 'Completed' ? 'done' : 'wip'}`}>
          {project.status}
        </span>
      </div>
      <h2 className="project-block__title">{project.title}</h2>
      <p className="project-block__desc">{project.description}</p>
      <div className="project-block__footer">
        <div className="project-block__tags">
          {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="project-block__links">
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="plink">GitHub →</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="plink">Live →</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const h = useReveal();
  return (
    <div className="page projects-page">
      <div className="container">
        <div className="reveal pg-hero" ref={h}>
          <p className="pg-label">Work</p>
          <h1 className="pg-title">Projects.</h1>
          <p className="pg-sub">From backend APIs to data pipelines — real problems, real solutions.</p>
        </div>
        <div className="all-projects">
          {projects.map((p, i) => <ProjectBlock key={p.id} project={p} delay={(i % 2) * 0.08} />)}
        </div>
        <div className="projects-more">
          <p className="label projects-more__label">More In Progress</p>
          <p className="projects-more__text">Always building. Check GitHub for the latest updates.</p>
          <a href="https://github.com/ernestmpiani" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            GitHub Profile →
          </a>
        </div>
      </div>
    </div>
  );
}
