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

      <section className="py-5 mx-auto text-black place-items-center">
        <img src={projectImg} alt={projectImgAlt} className="w-100 h-[250px] rounded-[3px] cursor-pointer"/>
        <button>{projectVercel}</button>

        <div className=" ">
          <div className="p-6 bg-white shadow rounded mt-10">
            <h3 className="text-xl font-bold mb-2 flex justify-center ">{title}</h3>
            <p>{projectDescription}</p>
            <p>{stack}</p>
          </div>
          
        </div>
      </section>
    );
  }
  