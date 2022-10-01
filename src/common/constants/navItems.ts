
export interface INavItem {
  id: number;
  name: string;
  path: string;
}

export const NAV_ITEMS: INavItem[] = [
  {
    id: 0,
    name: 'HEADER_NAVITEMS_HOME',
    path: '/'
  },
  {
    id: 0,
    name: 'HEADER_NAVITEMS_CATALOG',
    path: '/products'
  },
  {
    id: 1,
    name: 'HEADER_NAVITEMS_CONTACT',
    path: '/contact'
  }
];