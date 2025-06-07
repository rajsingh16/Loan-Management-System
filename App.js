import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import Dashboardicon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FloderSharedIcon from '@mui/icons-material/FolderShared';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from './firebase';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <Dashboardicon />,
  },
  {
    segment: 'clients',
    title: 'Clients',
    icon: <FloderSharedIcon />,
  },
  {
    segment: 'about',
    title: 'About',
    icon: <FloderSharedIcon />,
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <FloderSharedIcon />,
  },
  {
    segment: 'contact',
    title: 'Contact',
    icon: <ShoppingCartIcon />,
  },
];

export default function App() {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("User is signed in:", user.email);
        setSession({
          user: {
            name: ' ',
            email: user.email,
            image: <AccountCircleIcon />,
          },
        });
      } else {
        setUser(null);
        console.log("No user is signed in");
        navigate('/auth/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Raj',
            email: user?.email || '', // fallback to empty string
            image: <AccountCircleIcon />,
          },
        });
      },
      signOut: async () => {
        await auth.signOut();
        setUser(null);
        setSession({});
        navigate('/auth/login');
      },
    };
  }, [user, navigate]);

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={{ title: 'Oceanpe' }}
    >
      <Outlet />
    </AppProvider>
  );
}
