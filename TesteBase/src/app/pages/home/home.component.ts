import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/api/services/produto/produto.service';
import { ProdutoModel } from 'src/app/core/api/models/produto.model';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: any;
  products!: ProdutoModel[];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {

    this.listarProdutos()
    console.log("oi")
  }

  listarProdutos() {
    this.produtoService.Listar().subscribe({
      next: (response: any) => {
        console.log(response);
        const lista: ProdutoModel[] = response.map((item: any) => {

          return {
            idproduto: item.idproduto,
            codigoproduto: item.codigoproduto,
            descricaoproduto: item.descricaoproduto,
            valorproduto: item.valorproduto,
            datacadastroproduto: moment(item.datacadastroproduto).format('DD/MM/YYYY')
          };
        });
        this.dataSource = lista;
      },
      error: (error) => console.log(error, 'error :/')
    });
  }


}
