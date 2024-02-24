import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.biorhythms',
  appName: 'Biorhythms',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    url: "http://192.168.1.6:3000",
    cleartext: true
  }
};

export default config;
