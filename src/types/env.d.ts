/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string
    readonly VITE_APP_URL: string
    readonly VITE_ENABLE_DARK_MODE: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }