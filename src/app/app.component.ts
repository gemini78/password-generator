import { Component } from '@angular/core';
import { Settings } from './components/types';

@Component({
  selector: 'app-root',
  template: `
 <div class="container">
 <h1>Générer un mot de passe fort !</h1>
  <div class="grid" data-theme="light">
    <password-display [password]="password"></password-display>
    <div>
      <password-settings 
        (settings-change)="onSettingsChange($event)"
        [default-settings]="settings"
      ></password-settings>
      <hr>
      <password-controls (generate)="onClickGenerate()"></password-controls>
    </div>
  </div>
 </div>
  `,
  styles: []
})
export class AppComponent {
  password?: string;

  settings: Settings = {
    length: 30,
    uppercase: false,
    numbers: false,
    symbols: false,
  }

  onClickGenerate() {
    this.password = "MON_MOT_DE_PASSE";
    console.log("Génération du mot de passe");
    console.table(this.settings)

  }

  onSettingsChange(obj: Settings) {
    this.settings = obj;

    console.table(this.settings)
  }
}
