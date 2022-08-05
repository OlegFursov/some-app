export const changeScheme = () => {
     return window.matchMedia('(prefers-color-scheme: dark').matches ? 
     document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme');
}