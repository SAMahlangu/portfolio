import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sipho Alex Mahlangu</h1>
        <p className="text-xl text-gray-600 mb-8">Senior Software Developer</p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Passionate software developer with X years of experience in building web applications.
          Specialized in React, Node.js, and cloud technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">LinkedIn Profile</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">GitHub Profile</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Portfolio Website</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
