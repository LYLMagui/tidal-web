import unocss from "@unocss/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import type { PluginOption } from "vite";
import VueDevtools from "vite-plugin-vue-devtools";
import unplugin from "./unplugin";

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue(),
    vueJsx(),
    VueDevtools(),
    ...unplugin(viteEnv),
    unocss(),
  ];

  return plugins;
}
