# My portfolio website made with React and Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## project publish steps

- remove strict mode from main js
- check for assets link correctness in main html file
- modify main title in main html file
- modify noscript title in main html file for show in no js loaded
- npm run build
- remove all file in public_html folder except cgi-bin
- copy build directory content to public_html folder

## vite advantages

- hot reload with browser built in es modules
- build project with rullup js