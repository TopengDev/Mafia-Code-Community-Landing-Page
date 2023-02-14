import { type NextPage } from "next";
import Layout from "@/components/Layout";
import {
  HeadCoverSection,
  FeaturedMemberProjectsSection,
} from "@/components/AboutCommunityPage";

const About: NextPage = () => {
  return (
    <Layout title="About Community | Mafia Code">
      <HeadCoverSection />
      <FeaturedMemberProjectsSection />
    </Layout>
  );
};

export default About;
