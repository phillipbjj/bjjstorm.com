// app/layout.jsx
import './globals.css';

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
              <li><a href="/about">About</a></li>
              <li><a href="/nearbygyms">Gyms Nearby</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </nav>
          <p>2024 BJJSTORM. Suck it buster.</p>
        </footer>
      </body>
    </html>
  );
}