import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              //icon: 'pi pi-home',
              // items: [{
              //         label: 'New', 
              //         icon: 'pi pi-fw pi-plus',
              //         items: [
              //             {label: 'User', icon: 'pi pi-fw pi-user-plus'},
              //             {label: 'Filter', icon: 'pi pi-fw pi-filter'}
              //         ]
              //     },
              //     {label: 'Open', icon: 'pi pi-fw pi-external-link'},
              //     {separator: true},
              //     {label: 'Quit', icon: 'pi pi-fw pi-times'}
              // ]
          },
          {
              label: 'Sobre',
              //icon: 'pi pi-fw pi-pencil',
              // items: [
              //     {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              //     {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              // ]
          },
          {
              label: 'Serviços',
              //icon: 'pi pi-fw pi-question',
              items: [
                  {
                      label: 'Contratar Serviços',
                      icon: 'pi pi-pi pi-file'
                  },
                  {
                      label: 'Pesquisar Serviços', 
                      icon: 'pi pi-pi pi-search', 
                      items: [
                          {
                              label: 'Serviços Realizados', 
                            //   items: [
                            //       {
                            //           label: 'Workspace'
                            //       }
                            //   ]
                          },
                          {
                              label: 'Serviços em Andamento',
                              ///icon: 'pi pi-fw pi-file',
                          }
                  ]}
              ]
          },
          {
              label: 'Portifólio',
              //icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {label: 'Save', icon: 'pi pi-fw pi-save'},
                          {label: 'Update', icon: 'pi pi-fw pi-save'},
                      ]
                  },
                  {
                      label: 'Other',
                      icon: 'pi pi-fw pi-tags',
                      items: [
                          {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                      ]
                  }
              ]
          },
          {
              label: 'Blog',
             // icon: 'pi pi-fw pi-cog'
          },
          {
              label: 'Contato',
              //icon: 'pi pi-fw pi-cog',
              }
      ];
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  logado: boolean = false;
  painelPerfil: boolean = false;
 

  mostrarPerfil() {
    this.painelPerfil == true ? this.painelPerfil = false : this.painelPerfil = true
  }

}
