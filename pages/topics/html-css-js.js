import Layout from '../../components/Layout';

export default function HtmlCssJs() {
  return (
    <Layout>
      <h1>HTML, CSS, and JavaScript</h1>
      <p>Learn the basics of web development by mastering HTML, CSS, and JavaScript.</p>
      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin-top: 2rem;
          text-align: center;
        }

        p {
          text-align: center;
          margin-top: 1rem;
          font-size: 1.2rem;
        }
      `}</style>
    </Layout>
  );
}
