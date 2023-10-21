export const checkUserAuthenticated = () => {
  const userToken = localStorage.getItem('userToken');
  console.log('%c⧭', 'color: #733d00', userToken);
  return !!userToken;
};
