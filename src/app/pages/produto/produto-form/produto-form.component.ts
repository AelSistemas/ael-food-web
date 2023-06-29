import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategoria } from 'src/app/interface/categoria';
import { IProduto } from 'src/app/interface/produto';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  requestOptions!: any;
  produtoInterface!: IProduto;
  produtoForm!: FormGroup;
  categorias!:ICategoria[];
  categoriaSelecionada!:string;
  constructor(private formBuilder: FormBuilder,
              private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private activatedRoute :ActivatedRoute ){}

  ngOnInit(){
    this. initForms();
    let params = new HttpParams();
    params = params.append('pagina', 0);
    params = params.append('quantidade',1000);
    params = params.append('ordem', "ASC");
    params = params.append('ordenarPor', "idCategoria");
    this.requestOptions = { params: params };
    let param: Observable<Params> = this.activatedRoute.params;
    this. buscarTodos();
  }

 buscarTodos(){
    this.categoriaService.buscarTodos(this.requestOptions).subscribe(data => this.categorias= data);
  }

  initForms(){
    this.produtoForm = this.formBuilder.group({
      nome:['',[Validators.required]],
      idCategoria:['',[Validators.required]],
      descricao:['',[Validators.required]],
      imagem:['',[Validators.required]],
      preco:['',[Validators.required]],
      quantidade:['',[Validators.required]],
     
    })
    
  }
  
  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar(){
    let nome = this.getValueControl(this.produtoForm, 'nome')

    let idCategoria = this.getValueControl(this.produtoForm, 'idCategoria')

    let descricao= this.getValueControl(this.produtoForm, 'descricao');

    let imagem = this.getValueControl(this.produtoForm, 'imagem');

    let preco = this.getValueControl(this.produtoForm, 'preco');
    
    let quantidade = this.getValueControl(this.produtoForm, 'quantidade');
     const payload = {
        nome,
        idCategoria,
        descricao,
        imagem,
        preco,
        quantidade,
     
      }
      this.produtoService.salvar(payload).subscribe((data:any)=>{
        data = payload;
      })
      this.clearForm();
  }

  clearForm(){
    this.produtoForm.reset();
  }
}
