import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/cloud.jpg';

function Header() {

  const sideBarData = [
    {
      title: "Microservices",
      path: "/microservices"
    },
    {
      title: "Nanoservices",
      path: "/nanoservices"
    },
    {
      title: "IoT-Edge-Cloud",
      path: "/iot-edge-cloud"
    },
    {
      title: "Case Studies",
      path: "/case-studies"
    },
    {
      title: "Conclusion",
      path: "/conclusion"
    }
  ];

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <header>
      <div className='hidden-ls'>
      <FontAwesomeIcon icon={faBars} onClick={showSidebar}/>
      </div>
      <Link to="/" className='brand'>
      <img src={logo} alt="Logo" className='logo' />
        <h1>Microservice and Nanoservice Solutions</h1>
        </Link>
        <nav className="menu" id="menu">
          {sideBarData.map((item, key) => {
            return <Link to={item.path} key={key}>{item.title}</Link>
          })}
        </nav>
    </header>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items'>
        <li className='navbar-toggle'>
          <FontAwesomeIcon icon={faX} onClick={showSidebar}/>
        </li>
        {sideBarData.map((item, key) => {
            return <li key={key} className='nav-text'>
              <Link to={item.path} onClick={showSidebar}>{item.title}</Link>
            </li>
          })}
      </ul>
    </nav>
    </>
  );
}

export default Header;
