import { Injectable, Injector } from '@angular/core';
import { ServiceApiCrudService } from '../crud/service-api-crud.service';
import { ICategoria } from 'src/app/interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends ServiceApiCrudService<ICategoria> {
 
  constructor(public override injector: Injector){
    super(injector, "categorias")
  }
}
