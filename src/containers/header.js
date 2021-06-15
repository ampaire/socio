import logo from '../images/logo.png';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className= "home-btns">
        <button className= "btn-acc">Sign Up</button>
        <div className="mid"></div>
        <button className= "btn-acc">Login</button>
      </div>
      </header>
    </div>
  );
}

export default Header;