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
        <h1><Link href="/">BJJ Storm</Link></h1>
        <div className="topRightLinks">
          <h2>
            <a><Link href="/nearbygyms">GYMS NEAR YOU!</Link></a>
            <a><Link href="/shop">SHOP</Link></a>
            <a><Link href="/BJJAIModel">BJJ AI MODEL</Link></a>
          </h2>
        </div>
        <h3>
          <li><Link href="/submissions">Submissions</Link></li>
          <li><Link href="/guards">Guards</Link></li>
          <li><Link href="/takedowns">Takedowns</Link></li>
        </h3>
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