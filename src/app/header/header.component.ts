import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logo = 'https://i.imgur.com/f46YzcR.png'

  constructor() { }

  ngOnInit(): void {
  }

}
