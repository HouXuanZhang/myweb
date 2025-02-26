import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = process.env.NODE_ENV === 'production'
  ? '/~zhanhoux@kean.edu/CPS3500/houxuan-ai-website/' // 生产环境路径
  : '/'; // 本地开发路径

export default defineConfig({
  plugins: [react()],
  base: basePath
});
