/**
 * Format a date into a readable string.
 * Example:
 * 2026-07-16 -> Jul 16, 2026
 */

export const formatDate = (
  date: string | Date
): string => {
  const value = new Date(date);

  if (isNaN(value.getTime())) {
    return "Invalid Date";
  }

  return value.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/**
 * Format date with time.
 * Example:
 * Jul 16, 2026, 10:45 AM
 */

export const formatDateTime = (
  date: string | Date
): string => {
  const value = new Date(date);

  if (isNaN(value.getTime())) {
    return "Invalid Date";
  }

  return value.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

/**
 * Returns relative time.
 * Example:
 * Today
 * Yesterday
 * 5 days ago
 */

export const timeAgo = (
  date: string | Date
): string => {
  const now = new Date().getTime();
  const past = new Date(date).getTime();

  if (isNaN(past)) {
    return "Invalid Date";
  }

  const seconds = Math.floor((now - past) / 1000);

  if (seconds < 60) {
    return "Just now";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  const days = Math.floor(hours / 24);

  if (days === 1) {
    return "Yesterday";
  }

  if (days < 30) {
    return `${days} days ago`;
  }

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(months / 12);

  return `${years} year${years > 1 ? "s" : ""} ago`;
};

/**
 * Format only time.
 * Example:
 * 10:30 AM
 */

export const formatTime = (
  date: string | Date
): string => {
  const value = new Date(date);

  if (isNaN(value.getTime())) {
    return "Invalid Time";
  }

  return value.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

/**
 * Format for input fields.
 * Example:
 * 2026-07-16
 */

export const formatInputDate = (
  date: string | Date
): string => {
  const value = new Date(date);

  if (isNaN(value.getTime())) {
    return "";
  }

  return value.toISOString().split("T")[0];
};