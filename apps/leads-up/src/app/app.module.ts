import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleStrategy } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { AppRoutingModule } from './app.routing';
import { AccessInterceptor } from './core/interceptors/access.interceptor.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor.service';
import { PageTitleStrategy } from './core/services/page-title.service';
import { TokenProvider } from './core/services/token.service';
import { ToastService } from './shared/toast/services/toast.service';
import { ToastComponent } from './shared/toast/toast.component';
import { MessagesState } from './store/chat/chat.state';

export function servicesOnRun(config: AppConfig, token: TokenProvider) {
  return () => config.load().then(() => token.load());
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsModule.forRoot([MessagesState]),
    ToastComponent,
  ],
  providers: [
    AppConfig,
    TokenProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: servicesOnRun,
      multi: true,
      deps: [AppConfig, TokenProvider],
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AccessInterceptor, multi: true },
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy,
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ToastService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
