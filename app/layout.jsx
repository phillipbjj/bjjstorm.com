// app/layout.jsx
import './/globals.css';
import Link from 'next/link';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>BJJ STORM: THE BJJ MAP</title>
      </Head>
      <body>
        {children}
        <h1><Link href="/"><a>BJJ Storm</a></Link></h1>
        <div className="topRightLinks">
          <h2>
            <ul>
              <li><Link href="/nearbygyms"><a>GYMS NEAR YOU!</a></Link></li>
              <li><Link href="/shop">SHOP</Link></li>
              <li><Link href="/BJJAIModel">BJJ AI MODEL</Link></li>
            </ul>
          </h2>
        </div>
        <div className = "topLeftLinks">
          <h3>
            <ul>
              <li><Link href="/submissions">Submissions</Link></li>
              <li><Link href="/guards">Guards</Link></li>
              <li><Link href="/takedowns">Takedowns</Link></li>
            </ul>
          </h3>
        </div>
        <footer>
          <p>2024 BJJSTORM. Suck it buster.</p>
          <nav>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/nearbygyms">Gyms Nearby</Link></li>
              <li><Link href="/support">Support</Link></li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}