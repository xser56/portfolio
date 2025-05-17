 export interface ProjectProps
    {
      title: string,
      projectDescription: string,
      stack: string
      projectImg: string,
      projectImgAlt: string,
      projectVercel: string
    }

    export default function Projects({ title, projectImg, projectImgAlt, projectVercel, projectDescription, stack }:ProjectProps ) {

    return (

     <section className="py-8 px-4 text-black grid place-items-center gap-4 w-[500px]">
      <a href={projectVercel} target="_blank" rel="noopener noreferrer">
  <img 
    src={projectImg} 
    alt={projectImgAlt} 
    className="w-200 max-w-md h-[250px] object-cover rounded-sm cursor-pointer transition duration-300 hover:scale-101 shadow-md"
  />
</a>

  <div className="w-full max-w-md h-auto bg-gray-300">
    <div className="flex flex-col justify-between p-6 bg-white min-h-[250px] shadow-lg mt-2 ">
      <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
      <p className="mb-2 text-gray-700">{projectDescription}</p>
      <p dangerouslySetInnerHTML={{ __html: stack }} className="text-sm text-gray-600 " />      
    </div>
  </div>
</section>

    );
  }
  