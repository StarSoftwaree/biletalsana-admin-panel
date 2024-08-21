import SvgColor from '../../../src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'ana sayfa',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'biletler',
    path: '/tickets',
    icon: icon('ic_user'),
  },
  {
    title: 'kargolar',
    path: '/cargos',
    icon: icon('ic_user'),
  },
  {
    title: 'kasa',
    path: '/case',
    icon: icon('ic_user'),
  },
  {
    title: 'raporlar',
    path: '/reports',
    icon: icon('ic_user'),
  },
  {
    title: 'seferler',
    path: '/trips',
    icon: icon('ic_user'),
  },
  {
    title: 'kullanıcılar',
    path: '/users',
    icon: icon('ic_user'),
  },
  {
    title: 'bilgilerim',
    path: '/user',
    icon: icon('ic_user'),
  },
];

export default navConfig;
