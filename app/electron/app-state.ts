let isQuitting = false;

export function setIsAppQuitting(isAppQuitting: boolean) {
  isQuitting = isAppQuitting;
}

export function isAppQuitting(): boolean {
  return isQuitting;
}
