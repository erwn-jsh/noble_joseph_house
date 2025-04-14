import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <p className={styles.test}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel
        enim cumque quas officia dignissimos velit voluptates, modi ab nam unde
        eaque doloribus fuga asperiores sequi est nihil nostrum voluptatem.
      </p>
      <p className={styles.alt}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel
        enim cumque quas officia dignissimos velit voluptates, modi ab nam unde
        eaque doloribus fuga asperiores sequi est nihil nostrum voluptatem.
      </p>
    </div>
  );
}
