import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimationsAsync(),
    // importProvidersFrom(provideFirebaseApp(() => initializeApp({}))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
  ScreenTrackingService, UserTrackingService,
importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFunctions(() => getFunctions())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideRemoteConfig(() => getRemoteConfig()))]
};
