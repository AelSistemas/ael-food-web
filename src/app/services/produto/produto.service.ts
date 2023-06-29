import { Injectable, Injector } from '@angular/core';
import { ServiceApiCrudService } from '../crud/service-api-crud.service';
import { IProduto } from 'src/app/interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends ServiceApiCrudService<IProduto> {
 
  constructor(public override injector: Injector){
    super(injector, "produtos")
  }
}