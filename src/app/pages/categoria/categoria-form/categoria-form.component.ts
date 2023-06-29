import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoria } from 'src/app/interface/categoria';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent {
  clienteInterface!: ICategoria;
  categoriaForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private categoriaService: CategoriaService ){}

  ngOnInit(){
    this. initForms();
  }

  initForms(){
    this.categoriaForm = this.formBuilder.group({
      nome:['',[Validators.required]],
      descricao:['',[Validators.required]],

    })
  }
  
  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar(){
    let nome = this.getValueControl(this.categoriaForm, 'nome')

    let descricao = this.getValueControl(this.categoriaForm, 'descricao')

   
     const payload = {
        nome,
        descricao,
     
      }
      this.categoriaService.salvar(payload).subscribe((data:any)=>{
        data = payload;
      })
      this.clearForm();
  }

  clearForm(){
    this.categoriaForm.reset();
  }
}
