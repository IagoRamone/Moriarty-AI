import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('formulario', { static: true }) formulario!: ElementRef<HTMLFormElement>;
  @ViewChild('listaChat', { static: true }) listaChat!: ElementRef<HTMLDivElement>;

  mensagemUsuario: string | null = null;

  mensagemCriada(conteudo: string, ...nomeClasse: string[]): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('mensagem', ...nomeClasse);
    div.innerHTML = conteudo;
    return div;
  }

  carregamentoAnimacao(): void {
    const html = `
      <div class="conteudo_mensagem">
        <img src="assets/img/tttt.png" alt="Imagem Ollama" class="avatar">
        <p class="texto_lista"></p>
        <div class="carregamento_indicador">
          <div class="barra_carregamento"></div>
          <div class="barra_carregamento"></div>
          <div class="barra_carregamento"></div>
        </div>
      </div>
      <span class="icon material-symbols-outlined">content_copy</span>
    `;

    const mensagemdeSaida1 = this.mensagemCriada(html, 'teste1', 'carregamento');
    mensagemdeSaida1.querySelector('.texto_lista')!.textContent = this.mensagemUsuario;
    this.listaChat.nativeElement.appendChild(mensagemdeSaida1);
  }

  handleOutgoingChat(): void {
    this.mensagemUsuario = (this.formulario.nativeElement.querySelector('.input_escrever') as HTMLInputElement).value.trim();
    if (!this.mensagemUsuario) return;

    const html = `
      <div class="conteudo_mensagem">
        <img src="assets/img/Screenshot_1.png" alt="Imagem usuario" class="avatar">
        <p class="texto_lista"></p>
      </div>
    `;

    const mensagemdeSaida = this.mensagemCriada(html, 'teste');
    mensagemdeSaida.querySelector('.texto_lista')!.textContent = this.mensagemUsuario;
    this.listaChat.nativeElement.appendChild(mensagemdeSaida);

    this.formulario.nativeElement.reset();

    setTimeout(() => this.carregamentoAnimacao(), 500);
  }

  enviarMensagem(event: Event): void {
    event.preventDefault();
    this.handleOutgoingChat();
  }
}
