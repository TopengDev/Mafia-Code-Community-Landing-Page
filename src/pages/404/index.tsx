import { type NextPage } from "next";
import Error404Page from "@/components/404Page";
import Layout from "@/components/Layout";

const ErrorPage: NextPage = () => {
  return (
    <Layout title="404 | Page not found">
      <Error404Page />
    </Layout>
  );
};

export default ErrorPage;
