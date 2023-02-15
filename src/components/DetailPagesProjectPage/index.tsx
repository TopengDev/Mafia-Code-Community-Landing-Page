import { type FC } from "react";
import CardItem from "../ProjectDetailPage/DetailPagesSection/CardItem";

const DetailPagesProjectPage: FC = () => {
  return (
    <section className="section-container">
      <h1 className="section-title mt-28 mb-5">Detail Pages</h1>
      <div className="grid grid-cols-1 gap-10">
        <CardItem
          title="Start Screen"
          desc="This is the homepage of the project. It contains the project's description, the technologies used, and the project's features."
          srcImg="/img/sc-mobile-page.png"
        />
        <CardItem
          title="Homepage"
          desc="This is the homepage of the project. It contains the project's description, the technologies used, and the project's features."
          srcImg="/img/sc-mobile-page-2.png"
          isImgRight
        />
      </div>
    </section>
  );
};

export default DetailPagesProjectPage;
