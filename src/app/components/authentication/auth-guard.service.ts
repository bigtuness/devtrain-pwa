import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate() {
    return Observable.from(this.afAuth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => !authenticated && this.router.navigate([ '/login' ]));
  }
};
