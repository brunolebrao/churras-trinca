'use client';

export const getLocalStorage = (key: string) => {
  const data = window.localStorage.getItem(key);
  return JSON.parse(data!);
};

export const setLocalStorage = (key: string, value: unknown) => {
  const data = JSON.stringify(value);
  return window.localStorage.setItem(key, data);
};
export const removeLocalStorage = (key: string) => {
  return window.localStorage.removeItem(key);
};
