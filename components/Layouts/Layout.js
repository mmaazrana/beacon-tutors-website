import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { ReactComponent as Pattern } from '../../assets/background pattern.svg';

export default function Layout({ children }) {
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
