import { forwardRef } from 'react';
import styles from './HeroSection.module.scss';

// eslint-disable-next-line react/display-name
const HeroSection = forwardRef(({ title, description, bgImage }, ref) => {
  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={ref}
    >
      <div className={styles.overlay}>
        <h1><span>{title}</span>feed</h1>
        <p>{description}</p>
      </div>
    </div>
  );
});

export default HeroSection;