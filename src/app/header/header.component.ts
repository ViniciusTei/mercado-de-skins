import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SkinsService } from '../services/skins.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('buscar') searchInput: any;

  public logo = 'https://i.imgur.com/f46YzcR.png';
  public produtosBuscados: any[] = new Array();

  constructor(private SkinService: SkinsService,
              private Router: Router) { }

  ngOnInit(): void {
    this.SkinService.getAll()
      .subscribe(
        res => {
          this.produtosBuscados = res
        }
      )
  }

  public buscarItem() {
    let strItem = this.searchInput.nativeElement.value
    this.produtosBuscados.filter((x,i) =>{
      if(x.name === strItem) {
        this.Router.navigate(['/detalhes/' + i])
      }
    })
    
  }
}
