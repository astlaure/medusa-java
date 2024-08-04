import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/main/resources/static',
    build: {
        rollupOptions: {
            input: 'src/main/resources/static/main.js',
            output: {
                entryFileNames: 'main.js',
                assetFileNames: '[name].[ext]'
            }
        }
    }
});
