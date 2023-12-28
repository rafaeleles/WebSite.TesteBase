import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoModel } from '../../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseService {

  private rotabase: string = 'produto';


  constructor(httpClient: HttpClient) {
    super(httpClient)
  }

  public Excluir(idproduto: number) {
    return this.delete(`${this.rotabase}/excluir/${idproduto}`);
  }

  public Listar(): Observable<ProdutoModel[]> {
    return this.getAllHeaders(`${this.rotabase}/listar`, new HttpHeaders())
  }

  public Salvar(data: ProdutoModel) {
    return this.post(`${this.rotabase}/salvar`, data);
  }

  public Selecionar(idproduto: number): Observable<ProdutoModel> {
    return this.get(`${this.rotabase}/selecionar/${idproduto}`);
  }

}
