import React, {useEffect, useState} from 'react';
import sanityClient from '../../services/client';

export default function Project(){
  const [projectData, setProjectData] = useState(null);

  useEffect(()=>{
    sanityClient.fetch(`*[_type == "project"]{
      title,
      description,
      technologies,
      githubLink,
      functionalities,
      link,
      mainImage{
        asset->{
          _id,
          url
        }
      },
    }`).then((data) => setProjectData(data))
    .catch(console.error);
  }, []);

    return (
        <main className="bg-blue-100 min-h-screen p-12">
          <section className="container mx-auto">            
            <section className="flex">
              {projectData && projectData.map((project, index)=>(
              <article className="flex relative rounded-lg shadow-xl bg-white">
                <div className="p-4">
                <h3 className="text-red-400 text-3xl font-bold mb-2 hover:text-blue-400 ml-3">
                  <a href={project.link} alt={project.title}
                    target="_blank" rel="noopener noreferrer"
                  >{project.title}</a>
                </h3>
                <div className="text-gray-500 text-xs space-x-3">                  
                  <p className="my-6 text-lg ml-3 text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="my-6 text-lg text-gray-600 leading-relaxed">
                    {project.technologies}
                  </p>                
                  <p className="my-6 text-lg text-gray-600 leading-relaxed">
                    {project.functionalities}
                  </p>
                </div>
                <a 
                    href={project.link} rel="noopener noreferrer" target="_blank" 
                    className="text-md ml-3 py-2 text-red-400 font-bold hover:underline 
                    hover:text-red-500 flex"
                  >
                      Visualizar projeto{" "}                   
                  </a>
                </div>
                <div className="rounded-lg">
                  <img src={project.mainImage.asset.url}
                     alt={project.mainImage.alt}
                     className="w-90"
                  />
                 
                </div>
              </article>
              ))}
            </section>
          </section>
        </main>
    );
}


