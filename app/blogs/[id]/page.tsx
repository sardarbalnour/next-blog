import Container from "@/app/components/Container";

import { TGetArticles } from "../page";

type TArticleProps = {
  params: Promise<{ id: string }>;
//   serachParams: Promise<{}>;
};

async function Article(props: TArticleProps) {
  const { id } = await props.params;

  const result = await fetch(`http://localhost:3008/articles/${id}`);
  const data = (await result.json()) as TGetArticles;
  console.log(data);
  
  return (
    <Container>
      <div>
        <h2 className="text-2xl font-bold my-4">{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </Container>
  );
}

export default Article;
