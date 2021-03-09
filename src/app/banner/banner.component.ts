import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  public images = [
    '../../assets/images/banner1.jpg',
    '../../assets/images/banner2.jpg',
    '../../assets/images/banner3.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
