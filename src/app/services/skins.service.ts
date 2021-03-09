import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkinsService {

  private products = [
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
    {
      id: 0,
      name: 'M4A1-S | Printstream',
      floatValue: 0.15,
      value: 430.25,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png'
    },
  ]

  constructor(private http: HttpClient) { }

  getAll() {
    return this.products
  }
}
