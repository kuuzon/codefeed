import { Fragment, useState, useRef } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';
import Pagination from '@/components/common/Pagination/Pagination';
import paginate from '@/lib/pagination/paginate';

function AusNewsPage({ ausArticles }) {
  // PAGINATION STATES: 
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef(null);

  // PAGINATION FUNCTION: Handle changing of page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollToTop();
  }

  // PAGINATION FUNCTION 2: Cut total users array into pages
  const paginatedArticles = paginate(ausArticles, currentPage, pageSize);

  // SCROLL TO TOP FUNCTION:
  const scrollToTop = (event) => {
    const targetNode = listRef.current;
    console.log(listRef)
    targetNode.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'center'
    });
  }

  return (
    <Fragment>
      <Head>
        <title>Code-Feed | AusFeed</title>
        <meta 
          name='description'
          description='Browse all the Australian news of today via ABC News AU'
        />
      </Head>
      <HeroSection 
        title='Aus' 
        description='Catch up on all Australian News via ABC News'
        bgImage="/backgrounds/hero-news.webp"
        ref={listRef}
      />
      {ausArticles.length > 0 && <ArticlesList 
        articles={paginatedArticles} 
      />}
      {/* PAGINATION */}
      <Pagination 
        itemsCount={ausArticles.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={handlePageChange}
      />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (ABC News AU)
  const response = await fetch(`https://newsapi.org/v2/everything?sources=abc-news-au&sortBy=publishedAt&pageSize=100&page=1&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  // FILTER TO REMOVE NULL ENTRIES
  // Array with null properties -> array with full values
  // [ -> null ]
  // const filteredArray = articles.filter(article => )

  // ERROR HANDLING WITH SSG: https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#error-handling-and-revalidation
  if(!response.ok){
    throw new Error(`Failed to fetch posts - Error ${response.status}: ${data.message}`)
  }

  // Returned data as props
  return {
    props: {
      ausArticles: articles
    },
    revalidate: 60
  };
};

export default AusNewsPage;