import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import AchievementPage from './pages/AchievementPage';
import ContactPage from './pages/ContactPage';
import MyPage from './pages/MyPage';
import './styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'library/*', element: <LibraryPage /> },
      { path: 'achievement/*', element: <AchievementPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'my', element: <MyPage /> },
      { path: 'login', element: <MyPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
