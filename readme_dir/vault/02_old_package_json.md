
## linting eslint not working:


## old and new
==>  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0", // old
==> "lint": "eslint 'src/**/*.{ts,tsx}'", // new


```json

{
  "name": "redux-tutorial",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    // "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0", // old
    "lint": "eslint 'src/**/*.{ts,tsx}'", // new
    "preview": "vite preview"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^2.2.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.7",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.57.1",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}


```
