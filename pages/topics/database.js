import Layout from '../../components/Layout';

export default function Database() {
  return (
    <Layout>
      <h1>Databases</h1>
      <p>Databases store the information that powers websites and applications. Learn about relational and non-relational databases.</p>
      <ul>
        <li><strong>Relational Databases (SQL):</strong> Structured data stored in tables with relationships between them (e.g., MySQL, PostgreSQL).</li>
        <li><strong>Non-relational Databases (NoSQL):</strong> Flexible storage for unstructured data (e.g., MongoDB).</li>
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
