import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente-forms',
  templateUrl: './cliente-forms.component.html',
  styleUrls: ['./cliente-forms.component.scss']
})
export class ClienteFormsComponent{
  clienteInterface!: ICliente;
  clienteForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private clienteService: ClienteService ){}

  ngOnInit(){
    this. initForms();
  }




  initForms(){
    this.clienteForm = this.formBuilder.group({
      nome:['',[Validators.required]],
      contato:['',[Validators.required]],
      logradouro:['',[Validators.required]],
      numero:['',[Validators.required]],
      bairro:['',[Validators.required]],
      cep:['',[Validators.required]],
      cidade:['',[Validators.required]],
      estado:['',[Validators.required]],
    })
  }
  
  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar(){
    let nome = this.getValueControl(this.clienteForm, 'nome')

    let contato = this.getValueControl(this.clienteForm, 'contato')

    let logradouro= this.getValueControl(this.clienteForm, 'logradouro');

    let numero = this.getValueControl(this.clienteForm, 'numero');

    let bairro = this.getValueControl(this.clienteForm, 'bairro');
    
    let cep = this.getValueControl(this.clienteForm, 'cep');

    let cidade = this.getValueControl(this.clienteForm, 'cidade');

    let estado = this.getValueControl(this.clienteForm, 'estado');
     const payload = {
        nome,
        contato,
        logradouro,
        numero,
        bairro,
        cep,
        cidade,
        estado
      }
      this.clienteService.salvar(payload).subscribe((data:any)=>{
        data = payload;
      })
      this.clearForm();
  }

  clearForm(){
    this.clienteForm.reset();
  }
}
