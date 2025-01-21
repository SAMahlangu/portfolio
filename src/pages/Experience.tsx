import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Experience</h1>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Senior Software Developer</h2>
              <p className="text-gray-600">Company Name • 20XX - Present</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Led development of key features for flagship product</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
                <li>Architected scalable solutions handling millions of requests</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Software Developer</h2>
              <p className="text-gray-600">Previous Company • 20XX - 20XX</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Developed and maintained multiple web applications</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Improved application performance by 40%</li>
                <li>Implemented new features and fixed critical bugs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Junior Developer</h2>
              <p className="text-gray-600">First Company • 20XX - 20XX</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Assisted in development of web applications</li>
                <li>Fixed bugs and implemented minor features</li>
                <li>Participated in code reviews and team meetings</li>
                <li>Learned and implemented best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;