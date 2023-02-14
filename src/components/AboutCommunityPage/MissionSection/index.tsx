import { type FC } from "react";

export const MissionSection: FC = () => {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="relative flex h-full w-[280px] flex-col gap-8 overflow-hidden rounded-[6%] bg-gradient-to-tr from-[#131216]  to-[#1B151C] p-4 sm:h-[380px] sm:w-[440px] sm:p-12 md:h-[460px] md:w-[500px] md:gap-12 md:p-16 lg:h-[500px] lg:w-[560px]">
          <div className="absolute top-[-10px] left-[-10px] z-10 h-24 w-24 rounded-full bg-[#FF60D2] opacity-20 blur-2xl md:h-40 md:w-40"></div>
          <div className="absolute bottom-[-90px] right-10  z-10 h-24 w-32 rounded-full bg-[#FF60D2] opacity-[15%] blur-2xl md:h-40 md:w-52"></div>
          <h1 className="z-20 bg-gradient-to-br from-[#FFFFFF] to-[#CC3EA4] bg-clip-text text-center text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
            Our Mission
          </h1>
          <p className="z-20 text-justify text-xs text-white sm:text-sm md:text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            ratione, inventore quibusdam beatae et nihil sapiente totam rem ab
            at magni, eaque itaque sit, fugit perspiciatis tempore odio
            consequuntur quas! at magni, eaque itaque sit, fugit perspiciatis
            tempore odio consequuntur quas! consequuntur quas! at magni, eaque
            itaque sit, fugit perspiciatis tempore odio consequuntur quas!
          </p>
        </div>
      </section>
    </>
  );
};
