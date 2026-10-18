import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './SocialBrandIcons';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04. PROJECTS & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Security & Software Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Featured applications demonstrating secure document storage, cryptographic verification, and modern full-stack development.
          </p>
        </div>

        {/* Major Featured Project Hero Card */}
        {projectsData.filter((p) => p.isMajor).map((project) => (
          <div
            key={project.id}
            className="mb-16 glass-card rounded-3xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Image Preview Banner */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950" />
                
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono-code backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>MAJOR FEATURED PROJECT</span>
                </div>
              </div>

              {/* Major Project Content */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono-code text-cyan-400 tracking-wider uppercase">
                      CYBERSECURITY & FULL STACK
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                      LEGAL & INVESTIGATION DOMAIN
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Security Architecture Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono-code text-slate-300"
                      >
                        <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono-code text-slate-400 block">
                    TECHNOLOGY STACK & CRYPTOGRAPHY
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-cyan-500/30 text-xs font-mono-code"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links (Conditional Rendering) */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={project.githubUrl || "https://github.com/PSREEVIGNESHWARREDDY"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono-code flex items-center gap-2 transition-all hover:border-cyan-400 group"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>{project.githubUrl ? 'View Repository' : 'Explore on GitHub'}</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono-code flex items-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto text-xs font-mono-code text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Architecture Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        ))}

        {/* Security Labs & Automation Tools Header */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Security Labs & Automation Tools</span>
          </h3>
          <span className="text-xs font-mono-code text-slate-400">
            Active development sandboxes & CTF tooling
          </span>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.filter((p) => !p.isMajor).map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                    {project.status}
                  </span>
                  <FolderGit2 className="w-5 h-5 text-cyan-400/80" />
                </div>

                <h4 className="text-xl font-bold text-slate-100">
                  {project.title}
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[11px] font-mono-code"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links area with conditional display */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono-code">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </a>
                ) : (
                  <span className="text-slate-500 italic">
                    GitHub URL Placeholder
                  </span>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-card rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-cyan-500/40 space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-slate-100">
                  {selectedProject.title} Architecture
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white text-sm font-mono-code px-2 py-1 rounded-lg bg-slate-900 border border-slate-800"
              >
                Close
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
              <p>{selectedProject.description}</p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 font-mono-code text-xs">
                <span className="text-cyan-400 font-bold block mb-2">
                  KEY SECURITY MECHANISMS & COMPONENT INTEGRATION:
                </span>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">&bull;</span>
                  <span><strong>AES-256-GCM:</strong> Client/Server authenticated encryption for all sensitive payloads.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">&bull;</span>
                  <span><strong>SHA-256 Checksums:</strong> Cryptographic integrity verification against tampering.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">&bull;</span>
                  <span><strong>Storage Layer:</strong> S3-compatible object storage (MinIO) with restricted pre-signed URL access.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">&bull;</span>
                  <span><strong>Backend API:</strong> FastAPI async endpoints with SQLAlchemy ORM over PostgreSQL database.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold hover:bg-cyan-500/30 transition-all cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
