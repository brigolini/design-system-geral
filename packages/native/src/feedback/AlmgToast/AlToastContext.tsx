import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import type { AlmgToastData } from '@almg/interfaces';

interface AlToastContextValue {
  toasts: AlmgToastData[];
  addToast: (toast: Omit<AlmgToastData, 'id'>) => void;
  removeToast: (id: string) => void;
}

const AlmgToastContext = createContext<AlToastContextValue | null>(null);

let toastCounter = 0;

export function AlmgToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<AlmgToastData[]>([]);
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
    (toast: Omit<AlmgToastData, 'id'>) => {
      const id = `almg-toast-${++toastCounter}`;
      const duration = toast.duration ?? 5000;
      const newToast: AlmgToastData = { ...toast, id, duration };
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
    <AlmgToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </AlmgToastContext.Provider>
  );
}

export function useAlmgToast() {
  const ctx = useContext(AlmgToastContext);
  if (!ctx) throw new Error('useAlmgToast must be used within AlmgToastProvider');
  return ctx;
}
