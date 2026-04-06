import React ,{use, useEffect} from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Cards() {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
  ];

  useEffect(() => {
      gsap.utils.toArray(".card").forEach((card) => {
        gsap.to(card, {
          scale:0.8,
          opacity:0,
          scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            markers: true,
            scrub: true,
          },
        });
      })

  },[]);

  return (
    <main className="w-full text-white flex flex-col gap-5 items-center py-[15vh] pb-[30vh]">

      {images.map((img, idx) => {
        return (
          <div id="idx" className="card sticky top-[15vh] w-[25vw] text-center flex flex-col items-center gap-5 px-[30px] py-[10vh] rounded-lg bg-[#383027] ">
            <img className="w-[150px] " src={img} alt="image-c"></img>
            <h1 className="text-4xl ">
              The <br /> <span className="font-bold">Algotithm</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              eum.
            </p>
          </div> 
        );
      })}

    </main>
  );
}

export default Cards;
