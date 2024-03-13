// app/page.jsx
import styles from './globals.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>BJJ Storm</h1>
        <Image 
          src="/monsterSleeping.jpg"
          alt="Monster sleeping"
          width={500}
          height={300}
          className={styles.image}
        />
    </div>
  );
}