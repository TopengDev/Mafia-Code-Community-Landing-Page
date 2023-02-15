/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type FC } from "react";
import Link from "next/link";
import CarouselContent from "@/components/_children/CarouselContent";
import { useRouter } from "next/router";

type CarouselItemProps = {
  children: React.ReactNode;
};

const CarouselItem: FC<CarouselItemProps> = ({ children }) => {
  const router = useRouter();
  const { name_project } = router.query;

  return (
    <article className="bg-glass-gray-100 w-[90vw] rounded-3xl py-6 px-8">
      <Link
        href={`/projects/${name_project}/detail-pages`}
        className="link-hover flex justify-end text-primary-500"
      >
        See all pages
      </Link>
      <CarouselContent>{children}</CarouselContent>
    </article>
  );
};

export default CarouselItem;
