import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { ICategoria } from 'src/app/interface/categoria';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {
  categorias:any =[];
  requestOptions:any;
  categoriaDeleteDialog!: boolean;
  categoriaDialog:boolean = false;
  categoria!:ICategoria;
  submitted!: boolean;
  constructor(private categoriaService: CategoriaService,
              private activatedRoute :ActivatedRoute,
            ){

  }

  ngOnInit(){
    let params = new HttpParams();
    params = params.append('pagina', 0);
    params = params.append('quantidade',1000);
    params = params.append('ordem', "ASC");
    params = params.append('ordenarPor', "idCategoria");
    this.requestOptions = { params: params };
    let param: Observable<Params> = this.activatedRoute.params;
    this.buscarTodos();
  }

  buscarTodos(){
    this.categoriaService.buscarTodos(this.requestOptions).subscribe((data:any)=>{
      this.categorias= data
    });
  }

  editCategoria(id:any, categoria:ICategoria){
    this.categoriaDialog = true;
    return this.categoria = categoria;
  }

  delete(id: number, categoria: ICategoria) {
    this.categoriaDeleteDialog = true;
    return this.categoria = categoria;
  }
  
  deletar(id: number) {
    if (id) {
      this.submitted = true;
      this.categoriaService.deletar(id)
        .subscribe((response:any) => {
            this.categoria = response;
            this.buscarTodos();
        })
    }
    this.categoriaDeleteDialog = false;
  }

  salvar() {
    this.submitted = true;
    this.categoria = this.editCategoria(this.categoria.idCategoria, this.categoria);
    console.log("Retorno ", this.categoria)
    if (this.categoria.nome.trim()) {
      if (this.categoria.idCategoria) {
        this.categoriaService.atualizar(this.categoria.idCategoria, this.categoria)
          .subscribe(
            (response:any) => {
              this.categoria = response;
           
            }
          )
        }
        this.categoriaDialog = false;
      }
  }
  

  hideDialog() {
    this.categoriaDialog = false;
    this.categoriaDeleteDialog= false;
    this.submitted = false;
  }
}
