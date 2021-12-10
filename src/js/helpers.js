export const capitalize = function (string) {
  return string[0].toUpperCase() + string.slice(1);
};

export const formatTime = function (mills) {
  const seconds = `${Math.floor((mills / 1000) % 60)}`.padStart(2, 0);
  const minutes = `${Math.floor((mills / 1000 / 60) % 60)}`.padStart(2, 0);
  const hours = `${Math.floor((mills / 1000 / 3600) % 24)}`.padStart(2, 0);
  return `${hours == '00' ? '' : `${hours}h `}${minutes}min ${seconds}s`;
};