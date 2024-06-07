import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
    provideHttpClient(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'lanaphar',
          appId: '1:847618201479:web:adc68963e4b6056542a522',
          storageBucket: 'lanaphar.appspot.com',
          apiKey: 'AIzaSyCX0zWpYCebxtbcea-sMLrwEjG2uYLOwj0',
          authDomain: 'lanaphar.firebaseapp.com',
          messagingSenderId: '847618201479',
        })
      )
    ),
    // provideAuth(() => getAuth()),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
