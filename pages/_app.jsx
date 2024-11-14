import React from 'react';
import { useRouter } from 'next/router';
import '../public/styles/style.css';
import Head from 'next/head';
import Header from '../components/layout/header/ui/header';
import Sidebar from '../components/layout/sidebar/sidebar';

import CoursesIcon from "../public/icons/courses-icon"
import AcademicRecordIcon from "../public/icons/academic-record-icon";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  let sidebar;

  const myCourses = {
    name: "Мои курсы",
    icon: <CoursesIcon />,
    href: "/courses",
  }

  const academicRecord = {
    name: "Успеваемость",
    icon: <AcademicRecordIcon />,
    href: "/record",
  }

  switch (currentUrl) {
    case "/account":
      sidebar = <Sidebar 
        navList={[myCourses, academicRecord]}
      />
  }

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Сайт, предназначенный для школьного онлайн-обучения." />
        <meta name="keywords" content="школа онлайн обучение курсы курс школьник школьники учитель учителя" />
        <title>Learn & Grow</title>
      </Head>

      <Header />

      <main className="page">
        { sidebar }
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App;