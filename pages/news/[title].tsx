import payload from "payload";

export const getStaticPaths = async () => {
  const news = (await payload.find({ collection: "news" })).docs;
  console.log(news);
  return { paths: [], fallback: true };
};

export const getStaticProps = async () => {
  const news = (await payload.find({ collection: "news" })).docs;
  console.log(news);
  return { props: { news } };
};

const News = () => {
  return <h1>Hallo</h1>;
};
export default News;
