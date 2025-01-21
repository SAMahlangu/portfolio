import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">About Me</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <p className="text-gray-700 mb-6">
          I am a passionate software developer with a strong foundation in web technologies
          and a drive for creating efficient, scalable solutions. With X years of experience
          in the industry, I've had the opportunity to work on diverse projects and
          collaborate with talented teams.
        </p>
        
        <p className="text-gray-700">
          My expertise includes front-end development with React, back-end development
          with Node.js, and cloud infrastructure management. I'm constantly learning
          and staying up-to-date with the latest technologies and best practices.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-medium">Master's in Computer Science</h3>
              <p className="text-gray-600">University Name, 20XX-20XX</p>
            </li>
            <li>
              <h3 className="font-medium">Bachelor's in Software Engineering</h3>
              <p className="text-gray-600">University Name, 20XX-20XX</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-medium">AWS Certified Solutions Architect</h3>
              <p className="text-gray-600">Amazon Web Services, 20XX</p>
            </li>
            <li>
              <h3 className="font-medium">Professional Scrum Master I</h3>
              <p className="text-gray-600">Scrum.org, 20XX</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;