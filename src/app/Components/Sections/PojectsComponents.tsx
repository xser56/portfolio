 interface ProjectProps
    {
      title: string,
      projectImg: string,
      projectImgAlt: string,
      projectVercel: string
      projectDescription: string
    }
    export default function Projects({ title, projectImg, projectImgAlt, projectVercel, projectDescription }:ProjectProps ) {

    return (

      <section className="py-20 bg-gray-100  mx-auto px-6 text-black">
        <img src={projectImg} alt={projectImgAlt} className="w-[300px]"/>
        <button>{projectVercel}</button>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{projectDescription}</p>
          </div>
          
        </div>
      </section>
    );
  }
  