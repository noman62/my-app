import '../styles/global.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import store from '../app/store'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>My App</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer position='top-center' autoClose={2000} />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
