import TicketIcon from '@mui/icons-material/ConfirmationNumber';
import CargoIcon from '@mui/icons-material/LocalShipping';
import CaseIcon from '@mui/icons-material/AccountBalanceWallet';
import ReportsIcon from '@mui/icons-material/BarChart';
import TripsIcon from '@mui/icons-material/DirectionsBus';
import UsersIcon from '@mui/icons-material/People';
import UserInfoIcon from '@mui/icons-material/Person';
import FleetIcon from '@mui/icons-material/DirectionsCar';
import ManagementIcon from '@mui/icons-material/Business';
import AnnouncementsIcon from '@mui/icons-material/Campaign';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Biletler',
    path: '/tickets',
    icon: <TicketIcon />,
    children: [
      { title: 'Tüm Biletler', path: '/tickets/all' },
      { title: 'Satın Alınanlar', path: '/tickets/purchased' },
    ],
  },
  {
    title: 'Kargolar',
    path: '/cargos',
    icon: <CargoIcon />,
    children: [
      { title: 'Tüm Kargolar', path: '/cargos/all' },
      { title: 'Teslim Edilenler', path: '/cargos/delivered' },
    ],
  },
  {
    title: 'Kasa',
    path: '/case',
    icon: <CaseIcon />,
    children: [
      { title: 'Kasa İşlemleri', path: '/case/transactions' },
      { title: 'Günlük Kasa', path: '/case/daily' },
    ],
  },
  {
    title: 'Raporlar',
    path: '/reports',
    icon: <ReportsIcon />,
    children: [
      { title: 'Satış Raporları', path: '/reports/sales' },
      { title: 'Gelir Raporları', path: '/reports/revenue' },
    ],
  },
  {
    title: 'Müşteriler',
    path: '/customers',
    icon: <UsersIcon />,
    children: [
      { title: 'Tüm Müşteriler', path: '/customers/all' },
      { title: 'Sadık Müşteriler', path: '/customers/loyal' },
    ],
  },
  {
    title: 'Seferler',
    path: '/trips',
    icon: <TripsIcon />,
    children: [
      { title: 'Günlük Seferler', path: '/trips/daily' },
      { title: 'Geçmiş Seferler', path: '/trips/past' },
    ],
  },
  {
    title: 'Filo',
    path: '/fleet',
    icon: <FleetIcon />,
    children: [
      { title: 'Araçlar', path: '/fleet/vehicles' },
      { title: 'Bakım Raporları', path: '/fleet/maintenance' },
    ],
  },
  {
    title: 'Yönetim',
    path: '/management',
    icon: <ManagementIcon />,
    children: [
      { title: 'Kullanıcı Yönetimi', path: '/management/users' },
      { title: 'Yetkiler', path: '/management/permissions' },
    ],
  },
  {
    title: 'Bilgilerim',
    path: '/user',
    icon: <UserInfoIcon />,
    children: [
      { title: 'Kişisel Bilgiler', path: '/user/profile' },
      { title: 'Hesap Ayarları', path: '/user/settings' },
    ],
  },
  {
    title: 'Duyurular',
    path: '/announcements',
    icon: <AnnouncementsIcon />,
  },
];

export default navConfig;
