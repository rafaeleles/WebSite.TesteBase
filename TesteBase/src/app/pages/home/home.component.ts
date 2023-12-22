import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: any[] = [
    { code: '001', name: 'Produto 1', category: 'Categoria A', quantity: 10 },
    { code: '002', name: 'Produto 2', category: 'Categoria B', quantity: 15 },
    // Adicione mais objetos conforme necessário
  ];

}
