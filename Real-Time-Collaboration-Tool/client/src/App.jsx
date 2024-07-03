import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store.js';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';



const Root = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <FeatureSection />
        <Footer />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // Define other public routes here if needed
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'profile',
        element: <Dashboard />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

