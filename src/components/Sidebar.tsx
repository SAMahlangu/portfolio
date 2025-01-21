import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, FolderGit2, Mail, FileDown } from 'lucide-react';

const Sidebar = () => {
  const handleDownloadCV = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = '/path-to-your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'YourName-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div className="flex flex-col h-full">
        <div className="space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <User size={20} />
            <span>About</span>
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Briefcase size={20} />
            <span>Experience</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <FolderGit2 size={20} />
            <span>Projects</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Mail size={20} />
            <span>Contact</span>
          </NavLink>
        </div>
        <div className="mt-auto">
          <button
            onClick={handleDownloadCV}
            className="w-full flex items-center space-x-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FileDown size={20} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;