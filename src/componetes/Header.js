import React from 'react';
import logo from  '../image/logo.svg'
const Header = () => {
  return (
    <header>
      <nav className={`navbar navbar-expand-sm`}>
        <div className={`container-fluid text-white`}>
         <img className={`navbar-brand`} src={logo} alt="Logo"/>
          <ul className={`navbar-nav `}>
            <li className={`nav-item`}>
              <a className={`nav-link active text-white`} href="#home">Home</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link text-white`} href="#projetos">Projetos</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link active text-white`} href="#comentario">Comentario</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link active text-white`} href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;