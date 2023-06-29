import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 sidebarVisible: boolean = false;
 items!: MenuItem[];

 constructor(private router: Router){}
 ngOnInit() {
     this.items = [
         {
             label: 'Cadastros',
             icon: 'pi pi-fw pi-file',
             items: [
                 {
                     label: 'Clientes',
                     icon: 'pi pi-fw pi-plus',
                     items: [
                         {
                             label: 'Cadastrar',
                             icon: 'pi pi-fw pi-bookmark',
                             command: () => {
                              this.router.navigateByUrl("/clientes")
                          }
                         },
                         {
                             label: 'Consultar',
                             icon: 'pi pi-fw pi-video',
                             command: () => {
                              this.router.navigateByUrl("/clientes/cliente-consulta")
                          }
                         }
                     ]
                 },
                  {
                    label: 'Produtos',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Cadastrar',
                            icon: 'pi pi-fw pi-bookmark',
                            command: () => {
                                this.router.navigateByUrl("/produto/produto-forms")
                            }
                        },
                        {
                            label: 'Consultar',
                            icon: 'pi pi-fw pi-video',
                            command: () => {
                                this.router.navigateByUrl("/produto")
                            }
                        }
                    ]
                },
                {
                  label: 'Usuarios',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Cadastrar',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Consultar',
                          icon: 'pi pi-fw pi-video'
                      }
                  ]
              },
              {
                label: 'Categorias',
                icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Cadastrar',
                            icon: 'pi pi-fw pi-bookmark',
                            command: () => {
                                this.router.navigateByUrl("/categoria/categoria-form")
                            }
                        },
                        {
                            label: 'Consultar',
                            icon: 'pi pi-fw pi-video',
                            command: () => {
                                this.router.navigateByUrl("/categoria")
                            }
                        }
                    ]
                }
            ]
         }
     ];
 }
}
