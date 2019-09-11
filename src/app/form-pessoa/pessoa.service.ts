import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPessoa } from './pessoa.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders ({
    'Accept': 'text/html'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  private apiUrl = "http://edi.americanpet.com.br:8998/ideia/core/pessoa/"

  constructor(
    private http: HttpClient
  ) { }
    
  getPessoa(cpf_cnpj: string) {
    return this.http.get<IPessoa>(this.apiUrl + cpf_cnpj, httpOptions);
  }
}
