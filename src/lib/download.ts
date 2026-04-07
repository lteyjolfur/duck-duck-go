export function getDownloadText() {
  const ua = navigator.userAgent || navigator.vendor || '';

  if (/android/i.test(ua)) {
    return 'Android';
  }

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return 'iOS';
  }

  if (/Windows NT/i.test(ua)) {
    return 'Windows';
  }

  if (/Macintosh|Mac OS X/i.test(ua)) {
    return 'Mac';
  }

  return null;
}
