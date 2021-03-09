import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  public images = [
    'https://i.imgur.com/cWlm9Aq.jpg',
    'https://i.imgur.com/tDBn9nB.jpg',
  ]

  public index = 0
  constructor() { }

  ngOnInit(): void {
    document.getElementById('0')?.setAttribute('checked', 'true')
  }

  click(ev: number) {
    this.index += ev
    
    if(this.index == this.images.length ) {
      this.index = 0
    } else if(this.index < 0) {
      this.index = this.images.length -1
    }

    let checkboxes = document.getElementsByName('input')

    checkboxes.forEach(c => {
      if(c.id == String(this.index)) {
        c.setAttribute('checked', 'true')
      } else {
        c.removeAttribute('checked')
      }
    })
  }

}
