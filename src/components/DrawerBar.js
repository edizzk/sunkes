import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as VscIcons from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './DrawerBar.css';
import { IconContext } from 'react-icons';

const ipcRenderer = window.require('electron').ipcRenderer

function DrawerBar() {
  const [sidebar, setSidebar] = useState(false);
  const [isMaximized, setIsMaximized] = useState()

  ipcRenderer.on('maximized', () => {
    setIsMaximized(true)
  })

  ipcRenderer.on('unmaximized', () => {
    setIsMaximized(false)
  })

  const showSidebar = () => setSidebar(!sidebar);

  const minimizeScreen = () => {
      ipcRenderer.invoke('minimize-event')
  }

  const maximizeScreen = () => {
      ipcRenderer.invoke('maximize-event')
  }

  const unmaximizeScreen = () => {
    ipcRenderer.invoke('unmaximize-event')
  }

  const closeSreen = () => {
      ipcRenderer.invoke('close-event')
  }

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
            { !isMaximized ?
              <Link to='#' className='maximize-bar'>
              <VscIcons.VscChromeMaximize onClick={maximizeScreen} />
            </Link>
            :
              <Link to='#' className='maximize-bar'>
              <VscIcons.VscChromeRestore onClick={unmaximizeScreen} />
            </Link>
            }
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