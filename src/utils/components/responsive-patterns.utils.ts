export const responsive_patterns = {
  productGrid: {
    mobile: "grid-cols-1",
    tablet: "sm:grid-cols-2",
    desktop: "lg:grid-cols-3 xl:grid-cols-4",
    wide: "2xl:grid-cols-5",
  },
  categoryGrid: {
    mobile: "grid-cols-2",
    tablet: "sm:grid-cols-3 md:grid-cols-4",
    desktop: "lg:grid-cols-6",
  },
  spacing: {
    section: "py-8 sm:py-12 lg:py-16 xl:py-20",
    component: "p-4 sm:p-6 lg:p-8",
    container: "px-4 sm:px-6 lg:px-8 xl:px-12",
  },
  text: {
    hero: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
    heading: "text-xl sm:text-2xl lg:text-3xl",
    subheading: "text-lg sm:text-xl lg:text-2xl",
    body: "text-sm sm:text-base",
    caption: "text-xs sm:text-sm",
  },
};
