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

  // pessoaReqObs$: Observable<Pessoa>;
  pessoa: any = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    
  }
  
  pesquisarPessoa() {
    this.pessoaService.getPessoa().subscribe(response => {
      console.log(response);
      this.pessoa = response.data.pessoa;
    })
  }

}
