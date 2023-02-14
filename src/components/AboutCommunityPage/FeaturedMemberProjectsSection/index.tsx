import { type FC } from "react";
import CardProject from "./CardProject";

const FeaturedMemberProjectsSection: FC = () => {
  return (
    <section className="section-container">
      <h1 className="section-title mb-5">Featured Member Projects</h1>
      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <CardProject key={index} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedMemberProjectsSection;
