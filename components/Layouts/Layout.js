import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import dynamic from 'next/dynamic';

export default function Layout({ children }) {
  const Pattern = dynamic(() =>
    import('../../assets/background pattern.svg').then(
      (module) => module.ReactComponent
    )
  );

  return (
    <>
      <div className={'background'}>
        <Pattern viewBox="0 0 100% 0" />
      </div>
      <Nav className="nav" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
