import ArticleItem from '../ArticleItem/ArticleItem'
import Container from '@/components/common/Container/Container';

function ArticlesList(props) {
  const { articles } = props;

  return (
    <Container>
      {articles.map((article) => (
        <ArticleItem
          key={article.id ? article.id : article.title}
          id={article.id ? article.id : article.title}
          image={article.image}
          urlToImage={article.urlToImage}
          url={article.url}
          title={article.title}
          description={article.description}
          category={article.category}
        />
      ))}
    </Container>
  );
}

export default ArticlesList;