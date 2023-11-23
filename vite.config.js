import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  base:'/Portfolio',
  plugins: [react()],
  server: {
    host: true,
  },
});
