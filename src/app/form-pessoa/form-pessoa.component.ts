import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { IPessoa } from './pessoa.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.css']
})

export class FormPessoaComponent implements OnInit {

  pessoaForm = new FormGroup({
    codigo: new FormControl(''),
    nome: new FormControl(''),
    cpf_cnpj: new FormControl(''),
  });

  pessoa: any = [];
  cpf: string = '11015472788';

  constructor(
    private pessoaService: PessoaService,
  ) { }

  ngOnInit() {
    
  }
  
  pesquisarPessoa(cpf_cnpj: string) {
    this.pessoaService.getPessoa(cpf_cnpj).subscribe(response => {
      console.log(response);
      this.pessoa = response.data.pessoa;
    })
  }

  get(event) { // without type info
     console.log(event);
  }

  postPessoa(obj) {
    console.log('Pessoa POST: ' + obj)
  }

}
