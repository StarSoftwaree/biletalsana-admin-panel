import HomeIcon from '@mui/icons-material/Home';
import TicketIcon from '@mui/icons-material/ConfirmationNumber';
import CargoIcon from '@mui/icons-material/LocalShipping';
import CaseIcon from '@mui/icons-material/AccountBalanceWallet';
import ReportsIcon from '@mui/icons-material/BarChart';
import TripsIcon from '@mui/icons-material/DirectionsBus';
import UsersIcon from '@mui/icons-material/People';
import UserInfoIcon from '@mui/icons-material/Person';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'ana sayfa',
    path: '/dashboard',
    icon: <HomeIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'biletler',
    path: '/tickets',
    icon: <TicketIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'kargolar',
    path: '/cargos',
    icon: <CargoIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'kasa',
    path: '/case',
    icon: <CaseIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'raporlar',
    path: '/reports',
    icon: <ReportsIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'seferler',
    path: '/trips',
    icon: <TripsIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'kullanıcılar',
    path: '/users',
    icon: <UsersIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'bilgilerim',
    path: '/user',
    icon: <UserInfoIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
];

export default navConfig;
