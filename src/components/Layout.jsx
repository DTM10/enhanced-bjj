import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Helmet } from 'react-helmet';
export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Helmet>
        {/* Global Social Media Metadata */}
        <meta property="og:site_name" content="Enhanced BJJ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enhancedbjj.com" />
        <meta
          property="og:description"
          content="Join Enhanced BJJ for premier Brazilian Jiu-Jitsu training in London, Ontario. Learn self-defense, improve fitness, and gain confidence."
        />
        <meta property="og:image" content="https://enhancedbjj.com/logo.webp" />

        <meta
          name="instagram:image"
          content="https://enhancedbjj.com/instagram.png"
        />
        <meta
          name="facebook:image"
          content="https://enhancedbjj.com/facebook.png"
        />
      </Helmet>
      <Header />
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
