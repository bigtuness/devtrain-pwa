import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare const navigator: any;
declare const document: any;

@Component({
  selector: 'pwa-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  @ViewChild('cat') cat: ElementRef;

  public batteryDetails: any = {};
  public orientation: any = {};

  constructor() { }

  ngOnInit() {
    this.battery();
    this.deviceOrientation();
  }

  vibrate(delay: number) {
    window.navigator.vibrate(1000);
  }

  fullscreen() {
    document.documentElement.webkitRequestFullScreen();
  }

  battery() {

    navigator.getBattery().then(battery => {
      const updateChargeInfo = () => this.batteryDetails.charging = battery.charging ? 'Yes' : 'No';
      const updateLevelInfo = () => this.batteryDetails.level = battery.level * 100;
      const updateChargingInfo = () => this.batteryDetails.chargingTime = battery.chargingTime;
      const updateDischargingInfo = () => this.batteryDetails.dischargingTime = battery.dischargingTime;

      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();

      battery.addEventListener('chargingchange', updateChargeInfo);
      battery.addEventListener('levelchange', updateLevelInfo);
      battery.addEventListener('chargingtimechange', updateChargingInfo);
      battery.addEventListener('dischargingtimechange', updateDischargingInfo);

    });
  }

  deviceOrientation() {
    const onOrientationChanged = eventData => {
      this.orientation.gamma = Math.round(eventData.gamma);
      this.orientation.beta = Math.round(eventData.beta);
      this.orientation.alpha = Math.round(eventData.alpha);
      this.cat.nativeElement.style.transform = `rotate(${eventData.gamma}deg) rotate3d(1,0,0,${eventData.beta}deg)`;
    };
    window.addEventListener('deviceorientation', onOrientationChanged, false);
  }

}
