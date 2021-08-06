import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

var terserOptions = {}
if ((process.env.NODE_ENV = 'production')) {
    terserOptions = {
        compress: {
            drop_console: true,
            drop_debugger: true,
        },
    }
}
console.log(process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        terserOptions,
    },
})
