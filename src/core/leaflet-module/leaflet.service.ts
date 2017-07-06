import * as _ from 'lodash';
import { Map, MapOptions } from 'leaflet';
import { Injectable, EventEmitter } from '@angular/core';

import { MapData } from './models/map-data.class';
import { MapReadyEvent } from './models/map-ready-event.class';

@Injectable()
export class LeafletService {

  readonly MAP_DEFAULT_ID =  'DEFAULT_MAP';
  private mapData: MapData = new MapData();
  public mapReady: EventEmitter<any> = new EventEmitter(true);

  setMap(id: string = this.MAP_DEFAULT_ID, map: Map) {
    this.mapData[id] = map;
  }

  unsetMap(id: string = this.MAP_DEFAULT_ID) {
    delete this.mapData[id];
  }

  observeMapReady(id: string, resolve: Function) {
    this.mapReady.subscribe((event: MapReadyEvent) => {
      const dataId = event.id || this.MAP_DEFAULT_ID;
      if (id === dataId) {
        this.setMap(event.id, event.map);
        resolve(event.map);
      }
    });
  }

  getMap(id: string = this.MAP_DEFAULT_ID) {
    return new Promise<Map>(resolve => this.mapData[id] ? resolve(this.mapData[id]) : this.observeMapReady(id, resolve));
  }
}
