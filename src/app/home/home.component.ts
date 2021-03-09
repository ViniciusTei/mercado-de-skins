import { Component, OnInit } from '@angular/core';
import { SkinsService } from '../services/skins.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private SkinsService: SkinsService) { }

  ngOnInit(): void {
    console.log(this.SkinsService.getAll())
      
  }

}
