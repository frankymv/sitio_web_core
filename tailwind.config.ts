import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink:"#101827", brand:"#635BFF", cyan:"#22D3EE" }, boxShadow:{ glow:"0 20px 80px rgba(99,91,255,.22)" } } }, plugins: [] };
export default config;