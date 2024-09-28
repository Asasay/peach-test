import vitePugPlugin from "vite-plugin-pug-transformer";
import path from "path";
export default {
  base: "/peach-test/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  plugins: [vitePugPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
};
