import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>Welcome to VBMBLOGS</h1>
        <p>Your guide to mastering web development and design.</p>
        <a href="/topics" className="cta-button">Explore Topics</a>
      </section>

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 4rem 1rem;
          background-color: #f5f5f5;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .cta-button {
          background-color: #0070f3;
          color: white;
          padding: 0.75rem 2rem;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .cta-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </Layout>
  );
}

<section className="topics">
  <h2>Explore Topics</h2>
  <ul>
    <li><a href="/topics/html-css-js">HTML, CSS, JavaScript</a></li>
    <li><a href="/topics/react">React & Next.js</a></li>
    <li><a href="/topics/database">Databases</a></li>
    <li><a href="/topics/deployment">Deployment</a></li>
  </ul>

  <style jsx>{`
    .topics {
      text-align: center;
      padding: 2rem 0;
    }

    .topics h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .topics ul {
      list-style: none;
      padding: 0;
    }

    .topics ul li {
      margin: 0.5rem 0;
    }

    .topics ul li a {
      text-decoration: none;
      color: #0070f3;
      font-weight: bold;
    }

    .topics ul li a:hover {
      text-decoration: underline;
    }
  `}</style>
</section>

