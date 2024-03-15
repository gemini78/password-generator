import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe('AppComponent', () => {
    it('should work', async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent); // virtual browser

        fixture.detectChanges();

        // fixture.nativeElement <=> virtual dom
        const article = fixture.nativeElement.querySelector('article');

        expect(article.textContent).toBe('Cliquez sur le bouton "Générer"')
    })

    it('should change message when user clicks on generate button', async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent);

        fixture.autoDetectChanges();

        const button = fixture.nativeElement.querySelector('button');

        button.click();

        const article = fixture.nativeElement.querySelector('article');

        expect(article.textContent).toBe('MON_MOT_DE_PASSE')
    })

    it('should update settings when user clicks on checkboxes', async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent);

        fixture.autoDetectChanges();

        fixture.nativeElement.querySelector('#uppercase').click();
        expect(fixture.componentInstance.uppercase).toBeTrue();

        fixture.nativeElement.querySelector('#symbols').click();
        expect(fixture.componentInstance.symbols).toBeTrue();

        fixture.nativeElement.querySelector('#numbers').click();
        expect(fixture.componentInstance.numbers).toBeTrue();

        const length = fixture.nativeElement.querySelector('#length')
        length.value = 38;
        length.dispatchEvent(new Event('input'));
        expect(fixture.componentInstance.length).toBe(38);
    })
})