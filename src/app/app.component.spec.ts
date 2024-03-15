import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent
    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [AppComponent]
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
        expect(component.uppercase).toBeTrue();

        fixture.nativeElement.querySelector('#symbols').click();
        expect(component.symbols).toBeTrue();

        fixture.nativeElement.querySelector('#numbers').click();
        expect(component.numbers).toBeTrue();

        const length = fixture.nativeElement.querySelector('#length')
        length.value = 38;
        length.dispatchEvent(new Event('input'));
        expect(component.length).toBe(38);
    })
})