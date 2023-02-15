import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Error404Page: FC = () => {
  return (
    <section className="section-container my-16 flex flex-col items-center justify-center gap-4">
      <div className="absolute -z-10 h-full w-full">
        <Image src="/img/bg-404.svg" alt="404" fill />
      </div>
      <h1 className="text-9xl font-bold leading-none text-white md:text-[12rem] xl:text-[13rem]">
        404
      </h1>
      <h2 className=" text-xl  font-semibold leading-none text-white md:text-[1.6rem] xl:text-[2rem]">
        Sorry the page{" "}
        <span className="text-xl italic leading-none text-primary-300 md:text-[1.6rem] xl:text-[2rem]">
          not found
        </span>
      </h2>
      <button className="mt-4 max-w-xs self-center rounded-full bg-gradient-to-l from-[#ff1cf7] to-[#b249f8] py-3 px-6 text-center text-xs font-semibold text-white sm:max-w-full sm:px-9 sm:py-3 sm:text-sm md:px-9 md:py-3 md:text-xs lg:px-9 lg:py-3 lg:text-sm xl:px-10 xl:py-4 xl:text-base 2xl:px-12 2xl:py-6 2xl:text-lg">
        <Link href="/"> BACK TO HOMEPAGE</Link>
      </button>
    </section>
  );
};

export default Error404Page;
