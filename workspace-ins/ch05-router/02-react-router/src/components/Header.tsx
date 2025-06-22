import { NavLink } from "react-router";

function Header() {
  return (
    // <header>
    //   <h1>02 리액트 라우터 사용</h1>
    //   <Link to="/home">home</Link><br/>
    //   <Link to="/page1">page1</Link><br/>
    //   <Link to="/page2">page2</Link>
    // </header>

    <header>
      <h1>02 리액트 라우터 사용</h1>
      <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/home">home</NavLink><br/>
      <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/page1">page1</NavLink><br/>
      <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/page2">page2</NavLink>
    </header>
  );
}

export default Header;