// src/theme.ts
export const theme = {
  colors: {
    primary: '#007bff',
    background: '#f8f9fa',
    text: '#333',
  },
  fonts: {
    main: 'Open-Sans, Helvetica, Sans-Serif',
  },
};

// Exporte o tipo do seu tema para uso posterior
export type Theme = typeof theme;