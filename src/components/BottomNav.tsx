import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: '홈', icon: '🏠', match: '/' },
  { to: '/library', label: '서재', icon: '📚', match: '/library' },
  { to: '/achievement', label: '성과', icon: '🌟', match: '/achievement' },
  { to: '/contact', label: '문의', icon: '💬', match: '/contact' },
  { to: '/my', label: '마이', icon: '🙂', match: '/my' },
];

const isActivePath = (pathname: string, match: string) => {
  if (match === '/') {
    return pathname === '/';
  }
  return pathname === match || pathname.startsWith(`${match}/`);
};

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav" aria-label="모바일 하단 내비게이션">
      <ul className="bottom-nav__list">
        {navItems.map((item) => {
          const active = isActivePath(location.pathname, item.match);
          return (
            <li key={item.to} className="bottom-nav__item">
              <NavLink
                to={item.to}
                className={active ? 'bottom-nav__link is-active' : 'bottom-nav__link'}
              >
                <span aria-hidden="true" className="bottom-nav__icon">
                  {item.icon}
                </span>
                <span className="bottom-nav__label">{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
