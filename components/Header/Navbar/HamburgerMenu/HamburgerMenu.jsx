import './HamburgerMenu.css';
import { useEffect } from 'react';

const HamburgerMenu = ({ toggle }) => {
  const handleToggle = (event) => {
    const checkbox = document.getElementById('hamburger--checkbox');
    if (event.key === 'Enter' || event.key === ' ' || event.type === 'click') {
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        toggle();
        console.log('hola');
      }
    }
  };

  return (
    <div
      className="hamburger--container"
      tabIndex="1"
      onKeyDown={handleToggle}
      onClick={handleToggle}
    >
      <input type="checkbox" id="hamburger--checkbox" />
      <label htmlFor="hamburger--checkbox" className="hamburger--toggle">
        <div className="hamburger--bars" id="hamburger--bar1"></div>
        <div className="hamburger--bars" id="hamburger--bar2"></div>
        <div className="hamburger--bars" id="hamburger--bar3"></div>
      </label>
    </div>
  );
};

export default HamburgerMenu;
