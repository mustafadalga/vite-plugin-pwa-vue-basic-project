import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

//@ts-nocheck

interface IDefineConfig {
    command: string,
    mode: string
}

interface IAssetFileNames {
    [key: string]: any;
}


export default defineConfig(({command, mode}: IDefineConfig) => {

    const configs = {
        plugins: [
            vue(),
            VitePWA({
                // @ts-ignore
                mode: mode,
                registerType: "autoUpdate",
                useCredentials: true,
                workbox:{
                    maximumFileSizeToCacheInBytes:3000000
                },
            })
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo: IAssetFileNames) => {
                        const extType: string = assetInfo.name.split(".")[1];
                        return `assets/${extType}/[name][extname]`;
                    },
                    chunkFileNames: "assets/js/[name]-[hash].js"

                }
            }
        },

    }

    return configs;
});

