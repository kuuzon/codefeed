import { Fragment } from 'react';
import ArticleItem from '../ArticleItem/ArticleItem'
import Container from '@/components/common/Container/Container';

function ArticlesList({ articles }) {
  return (
    <Fragment>
      <Container>
        {articles.map((article, index) => (
          <ArticleItem
            key={article._id ? article._id : index}
            id={article._id ? article._id : index}
            image={article.image}
            urlToImage={article.urlToImage}
            url={article.url}
            title={article.title}
            description={article.description}
            category={article.category}
          />
        ))}
      </Container>
    </Fragment>
  );
}

export default ArticlesList;