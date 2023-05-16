import styles from './ArticleItem.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ButtonLink from '@/components/common/ButtonLink';

function ArticleItem(props) {
  // Programmatic Navigation
  const router = useRouter();
  function handleNavigate() {
    router.push('/' + props.id);
  }

  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>
          { props.image ? 
            <Image 
              src={props.image} 
              alt={props.title} 
              width={650}
              height={300}
            /> : 
            <Image 
              src={props.urlToImage} 
              alt={props.title} 
              width={650}
              height={300}
            /> 
          }
        </div>
        <div className={styles.articleContent}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
        { props.image ? 
          <Button onClick={handleNavigate}>
            Show Details
          </Button>
        : 
          <ButtonLink path={props.url} target="_blank">
            Link to Article
          </ButtonLink>
        }
      </div>
    </Card>
  );
}

export default ArticleItem;