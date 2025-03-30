import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../public/styles/style.css';
import Head from 'next/head';
import { getSidebar } from '../components/layout/sidebar/model/functions';
import { useCookies } from 'react-cookie';
import store from '../redux/store';
import { Provider } from 'react-redux';
import HeaderContainer from '../components/layout/header/header-container';

const App = ({ Component, pageProps }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['login', 'id']);  
  const router = useRouter();
  const currentUrl = router.asPath.split('/');
  const userId = currentUrl[currentUrl.indexOf("account") + 1];
  const sidebar = getSidebar(currentUrl);

  return (
    <Provider store={store}>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Сайт, предназначенный для школьного онлайн-обучения." />
        <meta name="keywords" content="школа онлайн обучение курсы курс школьник школьники учитель учителя" />
        <title>Learn & Grow</title>
      </Head>

      <HeaderContainer cookies={cookies} />
      {/* <Header /> */}

      {
        // sidebar
        // ? <main className="page page--account">
        //     <div className="container">
        //       <div className="account__container">
        //         { sidebar }
        //         <Component {...pageProps} userId={userId} cookie={cookies} />
        //       </div>
        //     </div>
        //   </main>
        // : 
          <main className="page">
            <Component {...pageProps} cookie={{cookies, setCookie, removeCookie}} router={router} />
          </main>
      }
    </Provider>
  )
}

export default App;