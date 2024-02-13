const Header = ({ children }) => {
    return (
      <header>
        <span className="logo">
          <h1>LOGO</h1>
          <span>{children}</span>
        </span>
      </header>
    );
  };
  
  export default Header;
  