/*import styles from './globals.css'*/
import Image from 'next/image'
import Layout from '/app/layout.jsx'


export default function Home() {
  return (
  <Layout>
    <div className="image-container">
        { <Image className="image" src="/monsterSleeping.jpg" alt="Monster sleeping" width={500} height={300} /> }
    </div>
  </Layout>
  );
}