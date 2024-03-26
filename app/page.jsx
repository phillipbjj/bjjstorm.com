/*import styles from './globals.css'*/
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
  <body>
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
    <div className="topRightLinks">
      <h2>
      <Link href="/nearbygyms"
      <a>GYMS NEAR YOU!</a>
        /*<a href="/map">SHOP</a>
        <a href="/map">BJJ AI MODEL</a>*/
      </Link>
      </h2>
    </div>
  </body>
  );
}