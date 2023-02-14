import { type NextPage } from "next";
import Layout from "@/components/Layout";

import {
  HeadCoverSection,
  FeaturedMemberProjectsSection,
  MissionSection,
} from "@/components/AboutCommunityPage";

const About: NextPage = () => {
  return (
    <Layout title="About Community | Mafia Code">
      <HeadCoverSection />
      <MissionSection />
      <FeaturedMemberProjectsSection />
    </Layout>
  );
};

export default About;
