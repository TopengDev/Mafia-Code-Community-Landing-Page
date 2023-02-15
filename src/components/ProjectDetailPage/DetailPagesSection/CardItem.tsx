import { type FC } from "react";
import Image from "next/image";

type CardItemProps = {
  title: string;
  desc: string;
  srcImg: string;
  isImgRight?: boolean;
};

const CardItem: FC<CardItemProps> = ({
  title,
  desc,
  srcImg,
  isImgRight = false,
}) => {
  return (
    <div
      className={`${
        isImgRight ? "flex-row-reverse" : ""
      } flex items-center px-20`}
    >
      <div className="grid w-1/2 place-items-center">
        <div className="mockup-phone">
          <div className="camera" />
          <div className="display">
            <div className="phone-1 artboard artboard-demo !h-[27rem] !w-52">
              <Image
                src={srcImg}
                className="h-full w-full"
                width={300}
                height={600}
                alt="Preview Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 pr-10 text-neutral-50">
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default CardItem;
