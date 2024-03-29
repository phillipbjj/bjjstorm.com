// app/layout.jsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BJJ STORM: THE BJJ MAP</title>
      </head>
      <body>
        {children}
        <h1>BJJ Storm</h1>
        <div className="topRightLinks">
          <h2>
            <a><Link href="/nearbygyms">GYMS NEAR YOU!</Link></a>
            <a><Link href="/shop">SHOP</Link></a>
            <a><Link href="/BJJAIModel">BJJ AI MODEL</Link></a>
          </h2>
        </div>
        <footer>
          <a><Link href="/about">About</Link></a>
          <a><Link href="/nearbygyms">Gyms Nearby</Link></a>
          <a><Link href="/support">Support</Link></a>
          <p>2024 BJJSTORM. Suck it buster.</p>
        </footer>
      </body>
    </html>
  );
}