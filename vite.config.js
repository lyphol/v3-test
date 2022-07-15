import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    https: true,
    proxy: {
      '/ocs': {
        secure: false,
        target: 'https://120.48.73.110',
        changeOrigin: true,
        headers: {
          Cookie:
            '__Host-nc_sameSiteCookielax=true; __Host-nc_sameSiteCookiestrict=true; oc_sessionPassphrase=6lVBdL76YmBhU%2BpMWw55itLcax7rhiOulRdJMtVy75LKB33JNrG2QKTcvRj5zXRKITJYHUgGwTeyadXkSaDRIjuokei%2Br7YbRwoMVitPfvrqecIYH9Jb6j6srP465lG9; oc24vc1h5alt=q0rbu70cv1doi474n8b50uo2ug; nc_username=liufeng; nc_token=1KyuN7xRXI%2BaSq2d2lMgKSjJz4In8pML; nc_session_id=q0rbu70cv1doi474n8b50uo2ug',
        },
      },
    },
  },
})
