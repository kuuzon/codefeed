import styles from './Pagination.module.scss'
import lodash from 'lodash';

const Pagination = ({ itemsCount, currentPage, pageSize, onPageChange }) => {
  // VALUE: Determine number of pages from items & items per page
  const pagesCount = Math.ceil(itemsCount / pageSize);  // 100/10

  // VALUE: Generate array of all page numbers needed
  const pages = lodash.range(1, pagesCount + 1);
  console.log(pages);

  // CONDITIONAL LOAD: Items < items per page
  if(pagesCount === 1) return null;

  // SUCCESS LOAD: Multiple pages
  return (
    <>
      <nav className={styles.pageNav} aria-label="user pagination">
        <ul className={styles.pagination}>
          {pages.map(page => (
            <li 
              key={page} 
              className={
                page === currentPage ? styles.pageItemActive : styles.pageItem
              }
            >
              <button 
                className={styles.pageLink}
                onClick={() => onPageChange(page)}
              >
                <span className={styles.pageLinkIcon}>{page}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Pagination