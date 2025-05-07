import { Fragment, useState, useRef } from 'react';
import Head from 'next/head';

import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';
import Pagination from '@/components/common/Pagination/Pagination';
import paginate from '@/lib/pagination/paginate';

function TechNewsPage({ techArticles }) {
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
  const paginatedArticles = paginate(techArticles, currentPage, pageSize);

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
        <title>Code-Feed | Top Headlines</title>
        <meta 
          name='description'
          description='Check out the trending tech headlines!'
        />
      </Head>
      <HeroSection 
        title='Tech' 
        description='Catch up on Top Tech News from around the globe'
        bgImage="/backgrounds/hero-news.webp"
        ref={listRef}
      />
      {techArticles.length > 0 && <ArticlesList 
        articles={paginatedArticles} 
      />}
      {/* PAGINATION */}
      <Pagination 
        itemsCount={techArticles.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={handlePageChange}
      />
    </Fragment>
  )
}

export const getStaticProps = async () => {
  // External API Request: Tech Category
  // const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&sortBy=publishedAt&pageSize=100&page=1&apiKey=${process.env.NEWS_API_KEY}`);
  const response = await fetch(`https://newsapi.org/v2/everything?sources=techcrunch,engadget,hacker-news,techradar,the-next-web,the-verge,wired&sortBy=publishedAt&pageSize=100&page=1&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;
  // console.log(articles);

  // ERROR HANDLING WITH SSG
  if(!response.ok){
    throw new Error(`Failed to fetch posts - Error ${response.status}: ${data.message}`)
  }

  // Filter data to remove BAD / NO IMAGES
  let sanitisedArticles = articles.filter(article => article.urlToImage !== null);
  console.log(sanitisedArticles)

  // Returned data as props
  return {
    props: {
      techArticles: sanitisedArticles
    },
    revalidate: 60
  };
};

export default TechNewsPage