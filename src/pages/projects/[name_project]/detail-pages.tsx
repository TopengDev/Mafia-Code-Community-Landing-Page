import { type NextPage } from "next";
import Layout from "@/components/Layout";
import DetailPagesProjectPage from "@/components/DetailPagesProjectPage";

const Project: NextPage = () => {
  return (
    <Layout title="Detail Project - Mafia Code Community">
      <DetailPagesProjectPage />
    </Layout>
  );
};

export default Project;
