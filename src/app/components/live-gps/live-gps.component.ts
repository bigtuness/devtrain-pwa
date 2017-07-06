import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'pwa-live-gps',
  templateUrl: './live-gps.component.html',
  styleUrls: ['./live-gps.component.scss']
})
export class LiveGpsComponent implements OnInit, OnDestroy {

  public clients: FirebaseListObservable<any>;
  private clientLocations: FirebaseListObservable<any>;
  private clientUser: FirebaseObjectObservable<any>;
  private interval: Subscription;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.clients = this.db.list(`/clients`);
    this.afAuth.authState.subscribe(user => {
      this.initUser(user);
      this.startInterval();
    });
  }

  ngOnDestroy() {
    this.interval.remove(this.interval);
  }

  initUser(user) {
    this.clientUser = this.db.object(`/clients/${user.uid}`);
    this.clientUser.set({ name: user.displayName, uid: user.uid, coords: [] });
    this.clientLocations = this.db.list(`/clients/${user.uid}/coords`);
  }

  transformCoords(data: any = {}) {
    return Object.keys(data).map(key => data[key]) || [];
  }

  startInterval() {
    this.interval = Observable
      .interval(5000)
      .subscribe(() => navigator.geolocation.getCurrentPosition(position => this.pushLocation(position)));
  }

  pushLocation(position) {
    this.clientLocations.push({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

}
