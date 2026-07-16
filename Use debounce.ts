import { useEffect, useState } from "react";

/**
 * Custom hook to debounce any value.
 *
 * @param value Value to debounce
 * @param delay Delay in milliseconds
 * @returns Debounced value
 */
export default function useDebounce<T>(
  value: T,
  delay: number = 500
): T {
  const [debouncedValue, setDebouncedValue] =
    useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}