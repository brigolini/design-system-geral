import { useAlToast } from './AlToastContext';
import { cn } from '../../utils/cn';
import { alToastClasses } from '../../utils/classMap';

const intentMap: Record<string, string> = {
  primary: alToastClasses.primary,
  secondary: alToastClasses.secondary,
  danger: alToastClasses.danger,
  warning: alToastClasses.warning,
};

export function AlToastContainer() {
  const { toasts, removeToast } = useAlToast();

  if (toasts.length === 0) return null;

  return (
    <div className={alToastClasses.container} role="region" aria-label="Notifications" aria-live="polite">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            alToastClasses.toast,
            intentMap[toast.intent ?? 'secondary'],
          )}
          role="alert"
        >
          <div>
            {toast.title && <div className={alToastClasses.title}>{toast.title}</div>}
            <div className={alToastClasses.message}>{toast.message}</div>
          </div>
          <button
            type="button"
            className={alToastClasses.close}
            onClick={() => removeToast(toast.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
