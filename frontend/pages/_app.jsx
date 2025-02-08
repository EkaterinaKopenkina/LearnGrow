import React from 'react';
import { useRouter } from 'next/router';
import '../public/styles/style.css';
import Head from 'next/head';
import Header from '../components/layout/header/header';
import { getSidebar } from '../components/layout/sidebar/model/functions';
import { useCookies } from 'react-cookie';

const App = ({ Component, pageProps }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['login', 'id']);  
  const router = useRouter();
  const currentUrl = router.asPath.split('/');
  const userId = currentUrl[currentUrl.indexOf("account") + 1];
  const sidebar = getSidebar(currentUrl);

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Сайт, предназначенный для школьного онлайн-обучения." />
        <meta name="keywords" content="школа онлайн обучение курсы курс школьник школьники учитель учителя" />
        <title>Learn & Grow</title>
      </Head>

      <Header isAuth={!!cookies.login} userId={cookies.id} />

      {
        sidebar
        ? <main className="page page--account">
            <div className="container">
              <div className="account__container">
                { sidebar }
                <Component {...pageProps} userId={userId} cookie={cookies} />
              </div>
            </div>
          </main>
        : <main className="page">
            <Component {...pageProps} cookie={{cookies, setCookie, removeCookie}} router={router} />
          </main>
      }
    </>
  )
}

export default App;