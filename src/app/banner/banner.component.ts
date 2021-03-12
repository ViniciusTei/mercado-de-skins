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
    if(ev > 0) {
      document.getElementById('img')?.classList.add('move')
    } 
    setTimeout(() => {
      this.index += ev
      document.getElementById('img')?.classList.remove('move')
      document.getElementById('img')?.classList.add('move-back')
      if(this.index == this.images.length ) {
        this.index = 0
      } else if(this.index < 0) {
        this.index = this.images.length -1
      }

      document.getElementById('img')?.classList.remove('move-back')
      document.getElementById('img')?.classList.add('move-center')
    }, 1000)

    
  }

}
