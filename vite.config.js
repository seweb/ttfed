import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "@/assets/index.scss";` // Adjust path as needed
      }
    }
  }
})

// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "@/styles/variables.scss";`, // Adjust path as needed
//       },
//     },
//   },
// });
