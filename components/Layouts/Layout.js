import Nav from '../Nav/Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav className="nav" />
      <main>{children}</main>
    </>
  );
}
