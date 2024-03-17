import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Settings } from './types';

@Component({
  selector: 'password-settings',
  template: `
  <label for="length">Longueur du mot de passe :{{length}}</label>
      <input (input)="onSettingsChange()" [(ngModel)]="length" type="range" min="10" max="50" name="length" id="length">

      <label for="uppercase">
        <input (change)="onSettingsChange()" [(ngModel)]="uppercase" role="switch" type="checkbox" name="uppercase" id="uppercase">
        Contiendra des majuscules
      </label>

      <label for="numbers">
        <input (change)="onSettingsChange()" [(ngModel)]="numbers" role="switch" type="checkbox" name="numbers" id="numbers">
        Contiendra des nombres
      </label>

      <label for="symbols">
        <input (change)="onSettingsChange()" [(ngModel)]="symbols" role="switch" type="checkbox" name="symbols" id="symbols">
        Contiendra des caractères spéciaux
      </label>

  `,
  styles: [
  ]
})
export class PasswordSettingsComponent {
  @Input('default-length')
  length = 20;
  @Input('default-uppercase')
  uppercase = false;
  @Input('default-numbers')
  numbers = false;
  @Input('default-symbols')
  symbols = false;

  @Output('settings-change')
  onSettingsChangeEvent = new EventEmitter<Settings>()

  onSettingsChange() {
    this.onSettingsChangeEvent.emit({
      length: this.length,
      uppercase: this.uppercase,
      symbols: this.symbols,
      numbers: this.numbers,
    })
  }
}
