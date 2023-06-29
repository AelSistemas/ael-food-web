import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICliente } from 'src/app/interface/cliente';
import { SERVER_URI } from 'src/enviroments/server_dev/server_dev';
import { ServiceApiCrudService } from '../crud/service-api-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ServiceApiCrudService<ICliente> {
 
  constructor(public override injector: Injector){
    super(injector, "clientes-web")
  }
}
