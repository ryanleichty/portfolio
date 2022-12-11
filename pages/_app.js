import '../styles/globals.css';
import Layout from '../components/Layout';
import { CONSOLE_MSG as consoleMessage } from '../constants/console';

export default function MyApp({ Component, pageProps }) {
  console.log(consoleMessage);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
