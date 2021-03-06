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
      id: 1,
      name: 'Glock-18 | Neo-Noir',
      floatValue: 0.005,
      value: 574.4,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_noir_light_large.c93d0cbfa767d1f822a53ebfca0d57f532088c48.png'
    },
    {
      id: 2,
      name: 'AK-47 | The Empress',
      floatValue: 0.15,
      value: 240.5,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_empress_light_large.f81d0b07dca381635c89f74bcdb6b64a6da6e81c.png'
    },
    {
      id: 3,
      name: 'M4A4 | Cyber Security',
      floatValue: 0.15,
      value: 48.51,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_cyberpunk_light_large.8ed70290de88498fcfdc0c89f23ba2ad60bd13a5.png'
    },
    {
      id: 4,
      name: 'AK-47 | Bloodsport',
      floatValue: 0.40,
      value: 349.2,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_bloodsport_light_large.40f076f6b92e08acc37860923533aa9768795b2b.png'
    },
    {
      id: 5,
      name: 'USP-S | Kill Confirmed',
      floatValue: 0.05,
      value: 1102.51,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_kill_confirmed_light_large.a3a7b8f19c9fb931b18c1edd7dd21d44e2c3c2e0.png'
    },
    {
      id: 6,
      name: 'USP-S | Flashback',
      floatValue: 0.15,
      value: 5.62,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_flashback_light_large.47e10129af33303bac557560400c33e4fe555680.png'
    },
    {
      id: 7,
      name: 'AWP | Containment Breach',
      floatValue: 0.11,
      value: 540.52,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_virus_light_large.00307f818d425d94cb8e4eeda1e27699f713fb45.png'
    },
    {
      id: 8,
      name: 'AWP | Gungnir',
      floatValue: 0.08,
      value: 28403.93,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_gungnir_light_large.f80c285940f75cca58731d8ead6bd8be1c18e38b.png'
    },
    {
      id: 9,
      name: 'Desert Eagle | Printstream',
      floatValue: 0.05,
      value: 1335.3,
      image: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deag_printstream_light_large.b468e56607da39fb2c88e493456290fd5db174c8.png'
    },
  ]

  constructor(private http: HttpClient) { }

  getAll() {
    return this.products
  }

  getById(id: number) {
    return this.products[id]
  }
  
  getByName(name: string) {
    let map = this.products.map(el => {
      return el.name.toUpperCase().includes(name.toUpperCase())
    })
    let newProducts: any = []
    
    map.forEach((element, i) => {
      if(element) {
        newProducts.push(this.products[i])
      }
    })
    
    return newProducts;
  }
}
