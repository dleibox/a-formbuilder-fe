import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Form Builder',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form List',
        link: '/pages/formbuilder',
      },
      {
        title: 'Form Builder',
        link: '/pages/formbuilder/upsert',
      },
      {
        title: 'Form Render',
        link: '/pages/formbuilder/render',
      },
    ],
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
