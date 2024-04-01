/*import styles from './globals.css'*/
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
  <body>
    <div className="container">
        { <Image className="image" src="/monsterSleeping.jpg" alt="Monster sleeping" width={500} height={300} /> }
    </div>
  </body>
  );
}