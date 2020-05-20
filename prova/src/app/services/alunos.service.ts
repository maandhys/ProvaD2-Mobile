import { Injectable } from '@angular/core';
import { aluno } from '../models/aluno.model';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private aluno: aluno = {
    nome: 'Nayara Pimentel',
    idade: 29,
    ra: 11817106,
  };
  constructor() { }


  getAluno(): aluno {
    return this.aluno;
  }
}