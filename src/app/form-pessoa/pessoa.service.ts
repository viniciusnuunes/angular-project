import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from './pessoa.model';
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
  
  apiUrl = "http://edi.americanpet.com.br:8998/ideia/core/pessoa/11015472788"

  constructor(
    private http: HttpClient
  ) { }
  
  getPessoa(): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.apiUrl, httpOptions);
  }
}
