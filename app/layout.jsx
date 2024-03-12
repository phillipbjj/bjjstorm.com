// app/layout.jsx
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BJJ Storm</title>
      </head>
      <body>{children}</body>
    </html>
  );
}