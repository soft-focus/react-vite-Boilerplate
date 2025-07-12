export const env = {
    // App Configuration
    appName: import.meta.env.VITE_APP_NAME || 'Echo',
    appUrl: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
    
    // Feature Flags
    features: {
      darkMode: import.meta.env.VITE_ENABLE_DARK_MODE !== 'false',
    },
    
    // Development
    isDev: import.meta.env.DEV,
  } as const
  
  // Helper functions
  export const isDevelopment = env.isDev
  export const isProduction = import.meta.env.PROD