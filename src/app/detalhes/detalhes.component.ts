import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute) {
    ActivatedRoute.params.subscribe(val => {
      console.log(val)
    })
  } 
  
  ngOnInit(): void {
    console.log('init')
    
  }

}
