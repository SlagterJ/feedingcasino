import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../app/store';
import { useReduxHydrate } from 'next-redux-hydrate';
import { Header } from '../components/navigation/Header';

export const MyApp = ({ Component, pageProps }) => {
  useReduxHydrate({ store });

  return (
    <ReduxProvider store={store}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ReduxProvider>
  );
};

export default MyApp;
