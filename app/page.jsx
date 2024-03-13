/*import styles from './globals.css'*/
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
        <h1>BJJ Storm</h1>
        <Image 
          className="image"
          src="/monsterSleeping.jpg"
          alt="Monster sleeping"
          width={500}
          height={300}
        />
    </div>
  );
}