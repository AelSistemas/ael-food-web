import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  produtos:any =[];
  requestOptions:any;
  constructor(private produtoService: ProdutoService,
              private activatedRoute :ActivatedRoute,){

  }

  ngOnInit(){
    let params = new HttpParams();
    params = params.append('pagina', 0);
    params = params.append('quantidade',1000);
    params = params.append('ordem', "ASC");
    params = params.append('ordenarPor', "idProduto");
    this.requestOptions = { params: params };
    let param: Observable<Params> = this.activatedRoute.params;
    this.buscarTodos();
  }

  buscarTodos(){
    this.produtoService.buscarTodos(this.requestOptions).subscribe((data:any)=>{
      this.produtos= data
    });
  }
}
