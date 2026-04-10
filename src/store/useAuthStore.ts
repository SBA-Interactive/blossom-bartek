import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
  wishlistProductIds: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name: string) => boolean;
  logout: () => void;
  mergeWishlist: (productIds: string[]) => void;
}

const STORAGE_KEY = "blossom-auth-users";

function getStoredUsers(): Record<string, { password: string; name: string }> {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

function saveUser(email: string, password: string, name: string): User {
  const users = getStoredUsers();
  const id = crypto.randomUUID();
  users[email] = { password, name };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return { id, email, name, wishlistProductIds: [] };
}

function validatePassword(email: string, password: string): User | null {
  const users = getStoredUsers();
  const userData = users[email];
  if (!userData || userData.password !== password) return null;

  const storedUser = localStorage.getItem(`blossom-user-${email}`);
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return { id: crypto.randomUUID(), email, name: userData.name, wishlistProductIds: [] };
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: (email: string, password: string) => {
        const user = validatePassword(email, password);
        if (!user) return false;
        set({ user, isAuthenticated: true });
        localStorage.setItem(`blossom-user-${email}`, JSON.stringify(user));
        return true;
      },

      signup: (email: string, password: string, name: string) => {
        const users = getStoredUsers();
        if (users[email]) return false;
        const user = saveUser(email, password, name);
        set({ user, isAuthenticated: true });
        localStorage.setItem(`blossom-user-${email}`, JSON.stringify(user));
        return true;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      mergeWishlist: (productIds: string[]) => {
        const { user } = get();
        if (!user) return;
        const updatedUser = {
          ...user,
          wishlistProductIds: [...new Set([...user.wishlistProductIds, ...productIds])],
        };
        set({ user: updatedUser });
        localStorage.setItem(`blossom-user-${user.email}`, JSON.stringify(updatedUser));
      },
    }),
    {
      name: "blossom-auth",
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);