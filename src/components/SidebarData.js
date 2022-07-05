import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'drawer-text'
  },
  {
    title: 'CreatePlan',
    path: '/createplan',
    icon: <IoIcons.IoIosPaper />,
    cName: 'drawer-text'
  },
  {
    title: 'ViewPlan',
    path: '/viewplan',
    icon: <FaIcons.FaCartPlus />,
    cName: 'drawer-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'drawer-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'drawer-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'drawer-text'
  }
];