import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="brand" aria-label="elliebooks 홈으로 이동">
          elliebooks
        </NavLink>
        <nav className="header__nav" aria-label="주요 메뉴">
          <NavLink to="/" end>
            홈
          </NavLink>
          <NavLink to="/library">서재</NavLink>
          <NavLink to="/achievement">성과</NavLink>
          <NavLink to="/contact">문의</NavLink>
          <NavLink to="/my">마이페이지</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
