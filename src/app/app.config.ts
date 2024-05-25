import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLicense } from '@syncfusion/ej2-base';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
  ],
};

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWFCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXped3RRRGFeVU1xW0E=');
