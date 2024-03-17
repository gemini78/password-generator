import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { PasswordDisplayComponent } from "./components/password-display.component";
import { PasswordControlsComponent } from "./components/password-controls.component";
import { PasswordSettingsComponent } from "./components/password-settings.component";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent
    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [AppComponent, PasswordDisplayComponent, PasswordControlsComponent, PasswordSettingsComponent],
            imports: [FormsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent); // virtual browser
        fixture.autoDetectChanges();
        component = fixture.componentInstance;
    })

    it('should work', async () => {
        // fixture.nativeElement <=> virtual dom
        const article = fixture.nativeElement.querySelector('article');

        expect(article.textContent).toBe('Cliquez sur le bouton "Générer"')
    })

    it('should change message when user clicks on generate button', async () => {

        const button = fixture.nativeElement.querySelector('button');

        button.click();

        const article = fixture.nativeElement.querySelector('article');

        expect(article.textContent).toBe('MON_MOT_DE_PASSE')
    })

    it('should update settings when user clicks on checkboxes and input range', async () => {
        fixture.nativeElement.querySelector('#uppercase').click();
        expect(component.settings.uppercase).toBeTrue();

        fixture.nativeElement.querySelector('#symbols').click();
        expect(component.settings.symbols).toBeTrue();

        fixture.nativeElement.querySelector('#numbers').click();
        expect(component.settings.numbers).toBeTrue();

        const length = fixture.nativeElement.querySelector('#length')
        length.value = 38;
        length.dispatchEvent(new Event('input'));
        expect(component.settings.length).toBe(38);
    })
})