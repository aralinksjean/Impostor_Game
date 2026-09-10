import type { CapacitorConfig } from '@capacitor/cli';

// Change appId here to rebrand the app; keep it in sync with android/app/build.gradle.
const config: CapacitorConfig = {
  appId: 'com.example.imposterparty',
  appName: 'Imposter Party',
  webDir: 'dist',
  backgroundColor: '#0f172a',
  android: {
    backgroundColor: '#0f172a',
  },
};

export default config;
