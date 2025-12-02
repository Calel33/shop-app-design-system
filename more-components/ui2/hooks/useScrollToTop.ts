/**
 * Hook to handle smooth scroll to top functionality
 */
export const useScrollToTop = () => {
  const scrollToTop = (smooth: boolean = true) => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  return { scrollToTop };
};
