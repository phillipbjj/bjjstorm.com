// app/layout.jsx
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BJJ STORM: THE BJJ MAP</title>
      </head>
      <body>{children}</body>
    </html>
  );
}