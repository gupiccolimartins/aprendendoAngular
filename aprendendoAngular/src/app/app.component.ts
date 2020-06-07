import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendendoAngular';
  public exibirConteudo = false;
  public livros = ['Como morrem os pobres e outros ensaios', 'A revolução dos bichos', '1988'];

  public produto = {
    tipo: 'livro',
    titulo: 'Livro',
    ano: 2000
  }

  public toggleConteudo() {
    this.exibirConteudo = !this.exibirConteudo;
  }
}
