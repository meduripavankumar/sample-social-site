
import React from 'react';
import Header from '@/components/layout/Header';
import ProfileCard from '@/components/profile/ProfileCard';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const Profile = () => {
  // Mock data - in a real app this would come from an API
  const profile = {
    name: 'John Doe',
    headline: 'Software Engineer at Tech Company',
    location: 'San Francisco Bay Area',
    connections: 582,
    about: 'Experienced software engineer with a passion for building scalable applications and solving complex problems. Skilled in JavaScript, React, Node.js, and cloud technologies.',
    isOwnProfile: true,
  };

  const experiences = [
    {
      id: '1',
      company: 'Tech Company',
      title: 'Software Engineer',
      location: 'San Francisco, CA',
      startDate: 'Jan 2022',
      endDate: 'Present',
      description: 'Leading frontend development for the main product. Implemented new features that increased user engagement by 25%.',
      logo: '',
    },
    {
      id: '2',
      company: 'Startup Inc',
      title: 'Frontend Developer',
      location: 'San Francisco, CA',
      startDate: 'Apr 2020',
      endDate: 'Dec 2021',
      description: 'Worked on developing responsive web applications using React and TypeScript.',
      logo: '',
    },
  ];

  const education = [
    {
      id: '1',
      school: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      date: '2016 - 2020',
      logo: '',
    },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'REST APIs', 'GraphQL', 'AWS', 'Docker',
    'CI/CD', 'Agile Methodologies'
  ];

  return (
    <div className="bg-linkedin-gray min-h-screen pb-16">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <ProfileCard {...profile} />
        
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Experience</h2>
              {profile.isOwnProfile && (
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Plus size={20} />
                </button>
              )}
            </div>
            
            <ul className="space-y-5">
              {experiences.map((experience) => (
                <li key={experience.id} className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      {experience.logo ? (
                        <img 
                          src={experience.logo} 
                          alt={experience.company}
                          className="w-10 h-10 object-contain" 
                        />
                      ) : (
                        <span className="text-sm font-medium text-gray-500">
                          {experience.company.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{experience.title}</h3>
                    <p className="text-gray-600">{experience.company}</p>
                    <p className="text-sm text-gray-500">
                      {experience.startDate} - {experience.endDate}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">{experience.location}</p>
                    <p className="text-gray-700">{experience.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Education</h2>
              {profile.isOwnProfile && (
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Plus size={20} />
                </button>
              )}
            </div>
            
            <ul className="space-y-5">
              {education.map((edu) => (
                <li key={edu.id} className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      {edu.logo ? (
                        <img 
                          src={edu.logo} 
                          alt={edu.school}
                          className="w-10 h-10 object-contain" 
                        />
                      ) : (
                        <span className="text-sm font-medium text-gray-500">
                          {edu.school.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.school}</h3>
                    <p className="text-gray-600">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Skills</h2>
              {profile.isOwnProfile && (
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Plus size={20} />
                </button>
              )}
            </div>
            
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="group py-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{skill}</span>
                    {profile.isOwnProfile && (
                      <button className="hidden group-hover:block text-sm text-gray-500 hover:text-linkedin-blue">
                        Endorse
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
