import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as VscIcons from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './DrawerBar.css';
import { IconContext } from 'react-icons';

function DrawerBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='drawerbar'>
          <div>
            <Link to='#' className='menu-bars'>
              <VscIcons.VscThreeBars onClick={showSidebar} />
            </Link>
          </div>
          <div>
            <Link to='#' className='minimize-bar'>
              <VscIcons.VscChromeMinimize onClick={minimizeScreen} />
            </Link>
            <Link to='#' className='maximize-bar'>
              <VscIcons.VscChromeMaximize onClick={maximizeScreen} />
              {/* VscChromeRestore (EKRAN BÜYÜDÜKTEN SONRA BU İCON A DÖNÜŞECEK--------------------------------------------------------) */}
            </Link>
            <Link to='#' className='close-bar'>
              <VscIcons.VscChromeClose onClick={closeSreen} />
            </Link>
          </div>
        </div>
        <nav className={sidebar ? 'drawer-menu active' : 'drawer-menu'}>
          <ul className='drawer-menu-items' onClick={showSidebar}>
            <li className='drawerbar-toggle'>
              <Link to='#' className='menu-bars-open'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default DrawerBar;