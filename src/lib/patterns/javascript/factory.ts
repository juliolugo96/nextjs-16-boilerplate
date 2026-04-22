type NotificationKind = 'success' | 'warning' | 'error';

interface Notification {
  kind: NotificationKind;
  message: string;
  tone: string;
}

const toneByKind: Record<NotificationKind, string> = {
  success: 'positive',
  warning: 'caution',
  error: 'critical',
};

export const createNotification = (
  kind: NotificationKind,
  message: string,
): Notification => ({
  kind,
  message,
  tone: toneByKind[kind],
});
