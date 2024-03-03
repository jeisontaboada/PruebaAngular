import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp
    ({"projectId":"pruebaangular-dac4a",
    "appId":"1:900555472025:web:477c461ca286ad9234cc08",
    "storageBucket":"pruebaangular-dac4a.appspot.com",
    "apiKey":"AIzaSyCm1YqZ6lFtUE8LoPG82_KONL8hLdFsXpM",
    "authDomain":"pruebaangular-dac4a.firebaseapp.com",
    "messagingSenderId":"900555472025","measurementId":"G-5Z067P02HS"}))),
     importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
