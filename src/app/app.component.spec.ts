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

    it('should changemessage when user clicks on generate button', async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();

        const button = fixture.nativeElement.querySelector('button');

        button.click();

        fixture.detectChanges();

        const article = fixture.nativeElement.querySelector('article');

        expect(article.textContent).toBe('MON_MOT_DE_PASSE')
    })
})