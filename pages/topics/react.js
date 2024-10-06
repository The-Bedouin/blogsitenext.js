import Layout from '../../components/Layout';

export default function React() {
  return (
    <Layout>
      <h1>React and Next.js</h1>
      <p>React is a JavaScript library for building user interfaces, while Next.js is a React framework for production-level apps with server-side rendering.</p>
      <ul>
        <li><strong>React:</strong> Build interactive UIs with component-based architecture.</li>
        <li><strong>Next.js:</strong> Adds server-side rendering and static generation to React for better performance and SEO.</li>
      </ul>
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 2.5rem;
          margin-top: 2rem;
        }
        p {
          text-align: center;
          margin-top: 1rem;
          font-size: 1.2rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin-top: 2rem;
        }
        ul li {
          margin-bottom: 1rem;
        }
      `}</style>
    </Layout>
  );
}
