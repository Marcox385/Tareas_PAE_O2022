import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Versión moderna de: const { express } = require('express')
platformBrowserDynamic().bootstrapModule(AppModule) // bootstrap => precargar módulo
  .catch(err => console.error(err));
