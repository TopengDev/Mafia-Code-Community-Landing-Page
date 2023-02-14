import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExportSquare } from "iconsax-react";

const CardProject: FC = () => (
  <div className="w-80 rounded-3xl bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter sm:w-96 xl:w-full">
    <div className="group relative flex h-[20rem] w-full items-center justify-center overflow-hidden rounded-t-3xl">
      <div className="invisible absolute z-10 flex h-full w-full flex-col justify-between backdrop-brightness-50 group-hover:visible">
        <Link href="https://github.com" target="_blank">
          <button className="btn-ghost btn flex w-full justify-end text-primary-300 hover:btn-ghost">
            <ExportSquare size={25} variant="TwoTone" />
          </button>
        </Link>
        <div className="px-4 py-2">
          <span className="text-sm font-light text-neutral-100">Mobile</span>
          <p className="font-medium text-white">Project Name</p>
        </div>
      </div>
      <Image src="/img/project-mob2.png" alt="Project Picture" fill />
    </div>
    <div className="flex items-center justify-between py-2 px-4">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <Image
              src="https://source.unsplash.com/random/45x45/?face"
              alt="Avatar"
              width={40}
              height={40}
            />
          </div>
        </div>
        <p className="font-medium text-neutral-50">Vincenzo</p>
      </div>
      <span className="h-fit rounded-full border border-primary-300 px-1 text-xs font-light text-primary-300">
        Back-End
      </span>
    </div>
  </div>
);

export default CardProject;
