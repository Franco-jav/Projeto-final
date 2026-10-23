import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-projeto',
  standalone: false,
  styleUrl: './cadastro-projeto.scss',
  templateUrl: './cadastro-projeto.html',
})
export class CadastroProjeto {
  nome = '';
descricao = '';
mensagem = '';

salvar(): void {
  if (!this.nome.trim()) return;
  this.mensagem = `Projeto "${this.nome.trim()}" validado!`;
}

limpar(): void {
  this.nome = '';
  this.descricao = '';
  this.mensagem = '';
}
}
