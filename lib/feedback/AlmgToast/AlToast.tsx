import { useAlmgToast } from './AlToastContext';
import { cn } from '../../utils/cn';
import { almgToastClasses } from '../../utils/classMap';

const intentMap: Record<string, string> = {
  primary: almgToastClasses.primary,
  secondary: almgToastClasses.secondary,
  danger: almgToastClasses.danger,
  warning: almgToastClasses.warning,
};

export function AlmgToastContainer() {
  const { toasts, removeToast } = useAlmgToast();

  if (toasts.length === 0) return null;

  return (
    <div className={almgToastClasses.container} role="region" aria-label="Notifications" aria-live="polite">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            almgToastClasses.toast,
            intentMap[toast.intent ?? 'secondary'],
          )}
          role="alert"
        >
          <div>
            {toast.title && <div className={almgToastClasses.title}>{toast.title}</div>}
            <div className={almgToastClasses.message}>{toast.message}</div>
          </div>
          <button
            type="button"
            className={almgToastClasses.close}
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
