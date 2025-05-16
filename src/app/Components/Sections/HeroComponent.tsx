import AnimatedBackground from "../Animation/AnimatedBackgroundHero"

export default function Hero() {

  return (
    
    <main className="font-serif h-screen flex flex-col justify-center bg-gray-100">
      
      <AnimatedBackground/>
      <div className="absolute left-30">
        <h1 className="text-[30px] font-bold mb-1 text-stone-900 ">Welcome. </h1>

      <h1 className="text-4xl font-bold mb-3 text-stone-900">
        To A Web Developer Portfolio
      </h1>
      
      <section className="text-[16px] max-w-xl text-stone-600 absolute left-8">
        <h1>Featuring</h1>
        <div className="ps-5 pt-2">
          <ul>Next.Js</ul>
          <ul>TypeScript</ul>
          <ul>Framer Motion</ul>

        </div>
      </section>
      </div>
      
      <section className=" absolute end-10 bottom-10 text-stone-900 text-[1px]">
        <div>
          <h1>
          Full Stack Web Devolopment and UI Design
        </h1>
        <h1>by Andrew Sayasing</h1>
        </div>        

      </section>


        
        
    </main>
  );
}
