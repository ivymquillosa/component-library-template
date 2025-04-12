import type { Config } from 'tailwindcss';
import baseConfig from '@temp/tailwind-config';

const config: Config = {
  presets: [baseConfig], // optional
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/components/src/**/*.{ts,tsx}',
  ],
};

export default config;