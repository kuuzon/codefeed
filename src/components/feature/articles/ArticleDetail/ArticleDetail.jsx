import styles from './ArticleDetail.module.scss';
import Image from 'next/image'
import Card from '@/components/common/Card';
import ButtonLink from '@/components/common/ButtonLink';

function ArticleDetail(props) {
  return (
    <Card size="single">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>
          <Image 
            src={props.image} 
            alt={props.title}
            width={650}
            height={500}
            priority={true}
          />
        </div>
        <div className={styles.articleContent}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
        <ButtonLink path="/">Back to Home</ButtonLink>
      </div>
    </Card>
  );
}

export default ArticleDetail;