import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkinsService } from '../services/skins.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public all: any[] = new Array<any>();

  constructor(private SkinsService: SkinsService,
              private Router: Router) { }

  ngOnInit(): void {
    this.all = this.SkinsService.getAll()
    console.log('home')
  }


}
