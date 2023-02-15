import { type FC } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

type CarouselContentProps = {
  children: React.ReactNode;
};

const CarouselContent: FC<CarouselContentProps> = ({ children }) => {
  return (
    <Carousel
      autoplay
      pauseOnHover
      enableKeyboardControls
      wrapAround
      autoplayInterval={5000}
      className="w-[80vw]"
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          onClick={previousSlide}
          className={"btn-ghost btn hover:btn-ghost"}
        >
          <ArrowCircleLeft
            variant="Bulk"
            size={35}
            className="text-primary-500"
          />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide} className="btn-ghost btn hover:btn-ghost">
          <ArrowCircleRight
            variant="Bulk"
            size={35}
            className="text-primary-500"
          />
        </button>
      )}
    >
      {children}
    </Carousel>
  );
};

export default CarouselContent;
