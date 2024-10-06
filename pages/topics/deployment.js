import Layout from '../../components/Layout';

export default function Deployment() {
  return (
    <Layout>
      <h1>Deployment</h1>
      <p>Deploying a website means making it live on the internet. Learn the different ways to deploy modern web applications.</p>
      <ul>
        <li><strong>Vercel:</strong> A popular platform for deploying Next.js applications with ease.</li>
        <li><strong>Netlify:</strong> Another hosting platform optimized for static websites.</li>
        <li><strong>Traditional Hosting:</strong> Deploy on traditional web servers like AWS, DigitalOcean, or shared hosting.</li>
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
