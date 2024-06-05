import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponentComponent } from './messages-component/messages-component.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({ declarations: [
        AppComponent,
        MessagesComponentComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
