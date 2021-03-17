import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent implements OnInit {
  elementType: 'url' |'canvas'|'img' = 'url';
  valor: '';
  adicionado = false;
  valorSalvo = '';
  valorAtual = '';
  nomeProduto = '';

  @Output() qrAdicionado = new EventEmitter();

  gerarCodigo(): any {
    this.adicionado = true;
    const qr = {
      valor: this.valor,
      elementType: this.elementType,
      valorSalvo: this.valorSalvo,
      nomeProduto : this.nomeProduto
    };
    this.qrAdicionado.emit(qr);
    this.limparInput();
  }


   onKeyUp(evento: KeyboardEvent): any{
      this.valorAtual = (evento.target as HTMLInputElement).value;
        }

  salvarValor(valor): any{
    const abc = valor.split('-', 3);
    this.nomeProduto = abc[2].split(',', 1);
    this.valorSalvo = valor.split('-', 2).toString().replace(',', '-').trim();
    this.gerarCodigo();

  }
  limparInput(): any{
    this.valor = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
