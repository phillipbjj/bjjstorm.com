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
      <a>GYMS NEAR YOU!</a>
      <a>SHOP</a>
      <a>BJJ AI MODEL</a>
      </h2>
    </div>
  </body>
  );
}