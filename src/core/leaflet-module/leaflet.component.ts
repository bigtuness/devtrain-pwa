import * as _ from 'lodash';

import * as L from 'leaflet';
import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';

import { LeafletService } from './leaflet.service';

@Component({
  selector: 'pwa-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  templateUrl: './leaflet.component.html'
})
export class LeafletComponent implements OnDestroy, AfterViewInit {
  @ViewChild('map') mapElement: ElementRef;
  @Input() options: L.MapOptions;
  @Input() id: string;

  readonly TILES_SOURCE = 'http://tiles.maps.sputnik.ru/tiles/kmt2/{z}/{x}/{y}.png';
  readonly MAP_ATTRIBUTION = `<a href="http://maps.sputnik.ru/">Спутник</a> |
                              &copy; Ростелеком |
                              &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`;
  readonly DEFAULT_MAP_OPTIONS: L.MapOptions = {
    center: [ 54.827104, 21.382348 ],
    zoom: 9,
    zoomControl: false,
    layers: [
      L.tileLayer(this.TILES_SOURCE, { attribution: this.MAP_ATTRIBUTION })
    ]
  };

  private mapReady: EventEmitter<any>;
  private map: L.Map;

  constructor(private leafletService: LeafletService) {
    this.mapReady = this.leafletService.mapReady;
  }

  ngAfterViewInit() {
    const options: L.MapOptions = _.merge({}, this.options, this.DEFAULT_MAP_OPTIONS);
    this.map = L.map(this.mapElement.nativeElement, options);
    this.mapReady.emit({ id: this.id, map: this.map });
  }

  ngOnDestroy() {
    this.leafletService.unsetMap(this.id);
  }

}
