import { Component, OnInit } from '@angular/core';

declare const navigator: any;
declare const document: any;

@Component({
  selector: 'pwa-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public batteryDetails: any = {};

  constructor() { }

  ngOnInit() {
    this.battery();
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

}
