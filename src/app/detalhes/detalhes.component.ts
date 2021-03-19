import { partitionArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkinsService } from '../services/skins.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public produto: any;
  public porcentagemFloat: string = ''; //es

  constructor(private ActivatedRoute: ActivatedRoute,
              private ProdutoService: SkinsService) {} 
  
  ngOnInit(): void {
    this.ActivatedRoute.params
      .subscribe((params) => {
        let id = Number(params.id)
        this.produto = this.ProdutoService.getById(id)
        let float = this.produto.floatValue * 100;
        this.porcentagemFloat = String(float.toFixed(0)) + '%';
      })
    
  }

}
