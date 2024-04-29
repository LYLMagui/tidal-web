import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { getRootPath, getSrcPath, setupVitePlugins } from "./build";
// import { resolve } from 'path';

// // 引入Unocss
// import Unocss from 'unocss/vite';
// import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd()
  ) as unknown as ImportMetaEnv;
  const rootPath = getRootPath();
  const srcPath = getSrcPath();
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
      },
    },
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: "0.0.0.0",
      port: 5200,
      open: true
      
    }
  };
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     Unocss({
//       // 使用Unocss
//       presets: [presetUno(), presetAttributify(), presetIcons()],
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "./src"),
//       "*": resolve(""),
//     },
//   },
// });
