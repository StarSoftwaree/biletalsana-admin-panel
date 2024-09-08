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
    title: 'Ana Sayfa',
    path: '/dashboard',
    icon: <HomeIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'Biletler',
    path: '/tickets',
    icon: <TicketIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'Kargolar',
    path: '/cargos',
    icon: <CargoIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'Kasa',
    path: '/case',
    icon: <CaseIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'Raporlar',
    path: '/reports',
    icon: <ReportsIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'Seferler',
    path: '/trips',
    icon: <TripsIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'Kullanıcılar',
    path: '/users',
    icon: <UsersIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'Bilgilerim',
    path: '/user',
    icon: <UserInfoIcon />,
    children: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
];

export default navConfig;
