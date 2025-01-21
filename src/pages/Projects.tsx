import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Project Name 1</h2>
            <p className="text-gray-600 mb-4">
              A brief description of the project, technologies used, and its impact.
            </p>
            <div className="flex gap-2 mb-4">
              {['React', 'Node.js', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Project Name 2</h2>
            <p className="text-gray-600 mb-4">
              A brief description of the project, technologies used, and its impact.
            </p>
            <div className="flex gap-2 mb-4">
              {['TypeScript', 'AWS', 'GraphQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;