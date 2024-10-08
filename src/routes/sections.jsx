import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../../src/layouts/dashboard';

export const IndexPage = lazy(() => import('../../src/pages/app'));
export const BlogPage = lazy(() => import('../../src/pages/blog'));
export const UserPage = lazy(() => import('../../src/pages/user'));
export const LoginPage = lazy(() => import('../../src/pages/login'));
export const Page404 = lazy(() => import('../../src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
      index: true,
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'dashboard', element: <IndexPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />, index: true,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
