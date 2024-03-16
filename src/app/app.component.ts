import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <div class="container">
 <h1>Générer un mot de passe fort !</h1>
  <div class="grid" data-theme="light">
    <div>
      <h3>Votre futur mot de passe :</h3>
      <article>{{message}}</article>
    </div>
    <div>
      <label for="length">Longueur du mot de passe :{{length}}</label>
      <input [(ngModel)]="length" type="range" min="10" max="50" name="length" id="length">

      <label for="uppercase">
        <input [(ngModel)]="uppercase" role="switch" type="checkbox" name="uppercase" id="uppercase">
        Contiendra des majuscules
      </label>

      <label for="numbers">
        <input [(ngModel)]="numbers" role="switch" type="checkbox" name="numbers" id="numbers">
        Contiendra des nombres
      </label>

      <label for="symbols">
        <input [(ngModel)]="symbols" role="switch" type="checkbox" name="symbols" id="symbols">
        Contiendra des caractères spéciaux
      </label>

      <hr>

      <button (click)="onClickGenerate()">Générer</button>
    </div>
  </div>
 </div>
  `,
  styles: []
})
export class AppComponent {
  message = 'Cliquez sur le bouton "Générer"';
  length = 20;
  uppercase = false;
  numbers = false;
  symbols = false;

  onClickGenerate() {
    this.message = "MON_MOT_DE_PASSE";
    console.log("Génération du mot de passe");
    console.table({
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
      length: this.length,
    })

  }
}
