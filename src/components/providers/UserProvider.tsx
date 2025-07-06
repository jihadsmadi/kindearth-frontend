'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null, rememberMe?: boolean) => void;
  logout: () => void;
  isRemembered: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [isRemembered, setIsRemembered] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    // Check for remembered user first
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      try {
        const userData = JSON.parse(rememberedUser);
        setUserState(userData);
        setIsRemembered(true);
        return;
      } catch (error) {
        console.error('Error parsing remembered user:', error);
        localStorage.removeItem('rememberedUser');
      }
    }

    // Check for session user
    const sessionUser = sessionStorage.getItem('sessionUser');
    if (sessionUser) {
      try {
        const userData = JSON.parse(sessionUser);
        setUserState(userData);
        setIsRemembered(false);
      } catch (error) {
        console.error('Error parsing session user:', error);
        sessionStorage.removeItem('sessionUser');
      }
    }
  }, []);

  const setUser = (userData: User | null, rememberMe: boolean = false) => {
    setUserState(userData);
    setIsRemembered(rememberMe);

    if (userData) {
      if (rememberMe) {
        // Store in localStorage for persistent login
        localStorage.setItem('rememberedUser', JSON.stringify(userData));
        sessionStorage.removeItem('sessionUser');
      } else {
        // Store in sessionStorage for session-only login
        sessionStorage.setItem('sessionUser', JSON.stringify(userData));
        localStorage.removeItem('rememberedUser');
      }
    } else {
      // Clear both storages on logout
      localStorage.removeItem('rememberedUser');
      sessionStorage.removeItem('sessionUser');
    }
  };

  const logout = async () => {
    try {
      // Call logout API if needed
      // await logoutApi();
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, isRemembered }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
} 