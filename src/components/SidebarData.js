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
    title: 'PastPlans',
    path: '/pastplans',
    icon: <IoIcons.IoMdPeople />,
    cName: 'drawer-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'drawer-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'drawer-text'
  }
];