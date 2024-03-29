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
            <a>GYMS NEAR YOU!</a>
            <a>SHOP</a>
            <a>BJJ AI MODEL</a>
          </h2>
        </div>
        <footer>
          <nav>
            <ul>
              <li><Link href="https://www.bjjstorm.com/about"></Link>About</li>
              <li><Link href="https://bjjstorm.com/nearbygyms"></Link>Gyms Nearby</li>
              <li><Link href="https://bjjstorm.com/support"></Link>Support</li>
            </ul>
          </nav>
          <p>2024 BJJSTORM. Suck it buster.</p>
        </footer>
      </body>
    </html>
  );
}