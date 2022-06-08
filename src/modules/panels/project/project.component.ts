import { Component } from '@angular/core';

@Component({
  selector: 'panels-project-app',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  projects = [
    {
      title       : 'Fipe',
      description : 'Página de consulta a preços de automóveis das categorias Carro, Moto e Caminhão segundo a FIPE.',
      datemonth   : 'mai',
      dateyear    : '2021',
      complexity  : 1,
      link        : 'http://fipe.nandorocha.com.br/',
      github      : 'https://github.com/FernandoHRocha/javascript_fipe'
    },
    {
      title       : 'Controle de Frota',
      description : 'ERP para controle de frota de veículos com as categorias para Carro, Moto e Caminhão com sistema de acompanhamento de abastecimentos e manutenções.',
      datemonth   : 'out',
      dateyear    : '2022',
      complexity  : 4,
      github      : 'https://github.com/FernandoHRocha/controle_frota_angular'
    }
  ]
}
