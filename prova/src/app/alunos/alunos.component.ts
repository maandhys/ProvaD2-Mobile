import { Component, OnInit } from '@angular/core';

// import { aluno } from '../models/alunos.model'
import { AlunosService } from '../services/alunos.service';
import { aluno } from '../models/aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public aluna: aluno;
  constructor( private alunoService: AlunosService) { }

  async ngOnInit() {
    this.aluna = await this.alunoService.getAluno();
     console.log(this.aluna);
  }

}
