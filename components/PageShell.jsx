import Header from './Header';
import Footer from './Footer';

export default function PageShell({ lang, page, children }) {
  return (
    <>
      <Header lang={lang} page={page} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
