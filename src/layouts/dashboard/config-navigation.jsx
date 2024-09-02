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
      {
        title: 'Overview',
        path: '/dashboard/overview',
        children: [
          { title: 'Detailed Overview', path: '/dashboard/overview/detailed' },
          { title: 'Quick Overview', path: '/dashboard/overview/quick' },
        ],
      },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    title: 'biletler',
    path: '/tickets',
    icon: <TicketIcon />,
    children: [
      { title: 'All Tickets', path: '/tickets/all' },
      { title: 'Pending Tickets', path: '/tickets/pending' },
    ],
  },
  {
    title: 'kargolar',
    path: '/cargos',
    icon: <CargoIcon />,
    children: [
      { title: 'Cargo Status', path: '/cargos/status' },
      { title: 'Cargo History', path: '/cargos/history' },
    ],
  },
  {
    title: 'kasa',
    path: '/case',
    icon: <CaseIcon />,
    children: [
      { title: 'Current Balance', path: '/case/balance' },
      { title: 'Transaction History', path: '/case/transactions' },
    ],
  },
  {
    title: 'raporlar',
    path: '/reports',
    icon: <ReportsIcon />,
    children: [
      { title: 'Sales Reports', path: '/reports/sales' },
      { title: 'User Reports', path: '/reports/users' },
    ],
  },
  {
    title: 'seferler',
    path: '/trips',
    icon: <TripsIcon />,
    children: [
      { title: 'Upcoming Trips', path: '/trips/upcoming' },
      { title: 'Past Trips', path: '/trips/past' },
    ],
  },
  {
    title: 'kullanıcılar',
    path: '/users',
    icon: <UsersIcon />,
    children: [
      { title: 'User List', path: '/users/list' },
      { title: 'User Roles', path: '/users/roles' },
    ],
  },
  {
    title: 'bilgilerim',
    path: '/user',
    icon: <UserInfoIcon />,
    children: [
      { title: 'Profile', path: '/user/profile' },
      { title: 'Settings', path: '/user/settings' },
    ],
  },
];

export default navConfig;
