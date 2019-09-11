import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.css']
})
export class FormPessoaComponent implements OnInit {

  pessoaReqObs$: Observable<Pessoa>;  

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    
  }
  
  pesquisarPessoa() {
    this.pessoaReqObs$ = this.pessoaService.getPessoa();
  }

}
