// components/Layout.js
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>VBMBLOGS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
      <nav className="navbar">
  <div className="container-nav">
    <a href="/" className="navbar-logo">
      <img src="/logo.png" alt="VBMBLOGS Logo" />
    </a>
    <ul className="navbar-nav">
      <li><a href="/">Home</a></li>
      <li><a href="/topics/html-css-js">HTML, CSS, JavaScript</a></li>
      <li><a href="/topics/react">React & Next.js</a></li>
      <li><a href="/topics/database">Databases</a></li>
      <li><a href="/topics/deployment">Deployment</a></li>
      <li><a href="/about">About Me</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>

      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>&copy; 2024 VBMBLOGS - All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        header {
          background-color: #333;
          padding: 1rem;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-nav {
          list-style: none;
          display: flex;
          gap: 1rem;
        }

        .navbar-nav a {
          color: white;
          text-decoration: none;
        }

        footer {
          text-align: center;
          padding: 1rem;
          background-color: #333;
          color: white;
        }
      `}</style>
    </>
  );
}
