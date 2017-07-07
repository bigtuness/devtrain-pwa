import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { CoreModule } from '../core/core.module';
import { environment } from '../environments/environment';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthGuard } from './components/authentication/auth-guard.service';
import { ChatComponent } from './components/chat/chat.component';
import { LiveGpsComponent } from './components/live-gps/live-gps.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ChatComponent,
    LiveGpsComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpwnnXug1_nm4mWHqemRr0EmjcqnoJCmw'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'login', component: AuthenticationComponent },
      { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
      { path: 'live-gps', component: LiveGpsComponent, canActivate: [AuthGuard] },
      { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
    ]),

    CoreModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
