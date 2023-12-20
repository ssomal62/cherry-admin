import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  // {
  //   navlabel: true,
  //   subheader: 'Home',
  // },

  // {
  //   id: uniqueId(),
  //   title: 'Dashboard',
  //   icon: IconLayoutDashboard,
  //   href: '/dashboard',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Utilities',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Typography',
  //   icon: IconTypography,
  //   href: '/ui/typography',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Shadow',
  //   icon: IconCopy,
  //   href: '/ui/shadow',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Auth',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/auth/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/auth/register',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Extra',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
{
    navlabel: true,
    subheader: 'Cherry Management',
  },
  {
    id: uniqueId(),
    title: 'Order Management',
    icon: IconAperture,
    href: '/order-info',
  },
  {
    id: uniqueId(),
    title: 'Product Management',
    icon: IconAperture,
    href: '/product-info',
  },
  {
    id: uniqueId(),
    title: 'Community Management',
    icon: IconAperture,
    href: '/community-info',
  },
];

export default Menuitems;
