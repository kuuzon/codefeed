import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/layout/Hero';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function WorldNewsPage(props) {
  const { worldArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>Code-Feed | GlobeFeed</title>
        <meta 
          name='description'
          description='Browse all the global news of today via BBC News UK'
        />
      </Head>
      <Hero 
        title={'Globe'} 
        description={'Catch up on all the global news via BBC News'}
        bgImage="/backgrounds/hero-news.webp"
      />
      {worldArticles.length > 0 && <ArticlesList articles={worldArticles} />}
    </Fragment>
  );
}

// SERVER SIDE GENERATION (snippet: "ngss")
export const getServerSideProps = async () => {
  // External API Request: NewsAPI (BBC News)
  const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  // Returned data as props
  return {
    props: {
      worldArticles: articles
    }
  };
};

export default WorldNewsPage;