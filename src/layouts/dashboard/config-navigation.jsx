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
  },
  {
    title: 'biletler',
    path: '/tickets',
    icon: <TicketIcon />,
  },
  {
    title: 'kargolar',
    path: '/cargos',
    icon: <CargoIcon />,
  },
  {
    title: 'kasa',
    path: '/case',
    icon: <CaseIcon />,
  },
  {
    title: 'raporlar',
    path: '/reports',
    icon: <ReportsIcon />,
  },
  {
    title: 'seferler',
    path: '/trips',
    icon: <TripsIcon />,
  },
  {
    title: 'kullanıcılar',
    path: '/users',
    icon: <UsersIcon />,
  },
  {
    title: 'bilgilerim',
    path: '/user',
    icon: <UserInfoIcon />,
  },
];

export default navConfig;
