import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import type { AlToastData } from './AlToast.types';

interface AlToastContextValue {
  toasts: AlToastData[];
  addToast: (toast: Omit<AlToastData, 'id'>) => void;
  removeToast: (id: string) => void;
}

const AlToastContext = createContext<AlToastContextValue | null>(null);

let toastCounter = 0;

export function AlToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<AlToastData[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const addToast = useCallback(
    (toast: Omit<AlToastData, 'id'>) => {
      const id = `al-toast-${++toastCounter}`;
      const duration = toast.duration ?? 5000;
      const newToast: AlToastData = { ...toast, id, duration };
      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        const timer = setTimeout(() => removeToast(id), duration);
        timersRef.current.set(id, timer);
      }
    },
    [removeToast],
  );

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <AlToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </AlToastContext.Provider>
  );
}

export function useAlToast() {
  const ctx = useContext(AlToastContext);
  if (!ctx) throw new Error('useAlToast must be used within AlToastProvider');
  return ctx;
}
