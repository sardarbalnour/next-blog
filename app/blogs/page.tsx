import Article from "../components/Article";
import Container from "../components/Container";

export type TGetArticles = {
  id?: number;
  title?: string;
  description?: string;
};

async function Blogs() {
  const result = await fetch("http://localhost:3008/articles");
  const data = (await result.json()) as TGetArticles[];

  console.log(data);

  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-12">
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
}

export default Blogs;
