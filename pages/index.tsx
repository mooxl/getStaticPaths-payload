import Link from "next/link";
import payload from "payload";
import { News } from "../types";

export const getStaticProps = async () => {
  const news = (await payload.find({ collection: "news" })).docs;
  return { props: { news } };
};

type Props = {
  news: News[];
};

const Index = ({ news }: Props) => {
  return (
    <div className="p-14">
      <h1>Links</h1>
      <div className="flex gap-x-5">
        {news.map((item) => (
          <Link key={item.id} href={`/news/${item.title}`}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
