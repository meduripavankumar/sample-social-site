
import React from 'react';
import Header from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bookmark, Search, MapPin, BriefcaseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  // Sample data - in a real app this would come from an API
  const recommendedJobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA (Remote)',
      salary: '$120K - $150K',
      skills: ['React', 'TypeScript', 'GraphQL'],
      posted: '2 days ago',
      applicants: 24,
      companyLogo: '',
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'Software Solutions Co.',
      location: 'New York, NY',
      salary: '$130K - $160K',
      skills: ['Product Strategy', 'Agile', 'User Research'],
      posted: '1 week ago',
      applicants: 78,
      companyLogo: '',
    },
    {
      id: '3',
      title: 'UX/UI Designer',
      company: 'Creative Design Studio',
      location: 'Los Angeles, CA (Hybrid)',
      salary: '$90K - $120K',
      skills: ['Figma', 'User Testing', 'Wireframing'],
      posted: '3 days ago',
      applicants: 45,
      companyLogo: '',
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      company: 'Startup Ventures',
      location: 'Austin, TX (Remote)',
      salary: '$100K - $130K',
      skills: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
      posted: '5 days ago',
      applicants: 56,
      companyLogo: '',
    },
  ];

  const savedJobs = recommendedJobs.slice(0, 2);
  
  return (
    <div className="bg-linkedin-gray min-h-screen pb-16">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8">
            <Card className="mb-4">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">Search for your next job</h2>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search by title, skill, or company"
                      className="pl-10 pr-3 py-2 w-full"
                    />
                  </div>
                  
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="City, state, or zip code"
                      className="pl-10 pr-3 py-2 w-full"
                    />
                  </div>
                  
                  <Button className="bg-linkedin-blue hover:bg-linkedin-darkBlue text-white">
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <Tabs defaultValue="recommended" className="w-full">
                <TabsList className="w-full border-b border-gray-200 rounded-none bg-transparent">
                  <TabsTrigger 
                    value="recommended" 
                    className="flex-1 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none border-b-2 data-[state=active]:border-linkedin-blue data-[state=active]:text-linkedin-blue"
                  >
                    Recommended
                  </TabsTrigger>
                  <TabsTrigger 
                    value="saved" 
                    className="flex-1 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none border-b-2 data-[state=active]:border-linkedin-blue data-[state=active]:text-linkedin-blue"
                  >
                    Saved Jobs
                  </TabsTrigger>
                  <TabsTrigger 
                    value="applied" 
                    className="flex-1 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none border-b-2 data-[state=active]:border-linkedin-blue data-[state=active]:text-linkedin-blue"
                  >
                    Applied Jobs
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="recommended" className="m-0 p-0">
                  <div className="divide-y divide-gray-200">
                    {recommendedJobs.map((job) => (
                      <div key={job.id} className="p-4 hover:bg-gray-50">
                        <div className="flex">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                              {job.companyLogo ? (
                                <img 
                                  src={job.companyLogo} 
                                  alt={job.company}
                                  className="w-10 h-10 object-contain" 
                                />
                              ) : (
                                <BriefcaseIcon size={20} className="text-gray-500" />
                              )}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <Link to={`/jobs/${job.id}`} className="text-linkedin-blue hover:underline font-medium">
                                  {job.title}
                                </Link>
                                <p className="text-gray-700">{job.company}</p>
                                <p className="text-gray-500 text-sm">{job.location}</p>
                                
                                {job.salary && (
                                  <p className="text-gray-700 text-sm mt-1">{job.salary}</p>
                                )}
                                
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {job.skills.map((skill, index) => (
                                    <span 
                                      key={index}
                                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                                
                                <div className="mt-2 text-xs text-gray-500">
                                  <span>{job.posted}</span>
                                  <span> • </span>
                                  <span>{job.applicants} applicants</span>
                                </div>
                              </div>
                              
                              <button className="self-start text-gray-400 hover:text-gray-700">
                                <Bookmark size={20} />
                              </button>
                            </div>
                            
                            <div className="mt-3 flex space-x-2">
                              <Button 
                                className="bg-linkedin-blue hover:bg-linkedin-darkBlue text-white"
                                size="sm"
                              >
                                Easy Apply
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="text-gray-700 border-gray-300"
                              >
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="saved" className="m-0 p-0">
                  {savedJobs.length > 0 ? (
                    <div className="divide-y divide-gray-200">
                      {savedJobs.map((job) => (
                        <div key={job.id} className="p-4 hover:bg-gray-50">
                          <div className="flex">
                            <div className="mr-4">
                              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                {job.companyLogo ? (
                                  <img 
                                    src={job.companyLogo} 
                                    alt={job.company}
                                    className="w-10 h-10 object-contain" 
                                  />
                                ) : (
                                  <BriefcaseIcon size={20} className="text-gray-500" />
                                )}
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <Link to={`/jobs/${job.id}`} className="text-linkedin-blue hover:underline font-medium">
                                    {job.title}
                                  </Link>
                                  <p className="text-gray-700">{job.company}</p>
                                  <p className="text-gray-500 text-sm">{job.location}</p>
                                  
                                  {job.salary && (
                                    <p className="text-gray-700 text-sm mt-1">{job.salary}</p>
                                  )}
                                  
                                  <div className="mt-2 text-xs text-gray-500">
                                    <span>Saved {job.posted}</span>
                                  </div>
                                </div>
                                
                                <button className="self-start text-linkedin-blue hover:text-gray-700">
                                  <Bookmark size={20} className="fill-current" />
                                </button>
                              </div>
                              
                              <div className="mt-3 flex space-x-2">
                                <Button 
                                  className="bg-linkedin-blue hover:bg-linkedin-darkBlue text-white"
                                  size="sm"
                                >
                                  Apply
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="text-gray-700 border-gray-300"
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <Bookmark size={40} className="mx-auto text-gray-400 mb-3" />
                      <h3 className="text-lg font-medium text-gray-700">No saved jobs</h3>
                      <p className="text-gray-500 mt-1">Jobs you save will appear here</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="applied" className="m-0">
                  <div className="p-8 text-center">
                    <BriefcaseIcon size={40} className="mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-gray-700">No applications yet</h3>
                    <p className="text-gray-500 mt-1">Jobs you apply to will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
          
          <div className="hidden md:block md:col-span-4">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <h2 className="font-semibold mb-3">Job seeking preferences</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm">Job titles</h3>
                    <p className="text-gray-500 text-sm">Frontend Developer, UI Developer, JavaScript Developer</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm">Location</h3>
                    <p className="text-gray-500 text-sm">San Francisco Bay Area (Remote)</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm">Job types</h3>
                    <p className="text-gray-500 text-sm">Full-time, Contract, Remote</p>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Edit preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
