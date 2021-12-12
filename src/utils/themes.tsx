export const setTheme = (theme: string) => {
  // localStorage.setItem("theme", theme);
  document.documentElement.className = theme;
};

// export const keepTheme = () => {
//   const storedTheme = localStorage.getItem("theme");
//   const defaultTheme = setTheme("light-theme");
//   if (storedTheme) {
//     storedTheme === "dark-theme" ? setTheme("dark-theme") : defaultTheme;
//   } else {
//     return defaultTheme;
//   }
// };
