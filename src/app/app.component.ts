import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <div class="container">
 <h1>Générer un mot de passe !</h1>
  <div class="grid" data-theme="light">
    <div>
      <h3>Votre futur mot de passe :</h3>
      <article>Cliquez sur le bouton "Générer"</article>
    </div>
    <div>
      <label for="length">Longueur du mot de passe :</label>
      <input type="range" min="10" max="50" name="length" id="length">

      <label for="uppercase">
        <input role="switch" type="checkbox" name="uppercase" id="uppercase">
        Contiendra des majuscules
      </label>

      <label for="numbers">
        <input role="switch" type="checkbox" name="numbers" id="numbers">
        Contiendra des nombres
      </label>

      <label for="symbols">
        <input role="switch" type="checkbox" name="symbols" id="symbols">
        Contiendra des caractères spéciaux
      </label>

      <hr>

      <button>Générer</button>
    </div>
  </div>
 </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'password-generator';
}
