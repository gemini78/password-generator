import { TestBed } from "@angular/core/testing";
import { PasswordDisplayComponent } from "./password-display.component";
import { Component } from "@angular/core";


@Component({
    selector: 'test',
    template: `
    <password-display password="MOCK_PASSWORD"></password-display>
    `
})
class TestComponent { }

@Component({
    selector: 'test',
    template: `
    <password-display></password-display>
    `
})
class TestDefaultComponent { }

describe("PasswordDisplayComponent", () => {
    it("should display the input message", async () => {
        await TestBed.configureTestingModule({
            declarations: [PasswordDisplayComponent, TestComponent]
        }).compileComponents();

        const fixture = TestBed.createComponent(TestComponent); // virtual browser
        fixture.autoDetectChanges();
        const article = fixture.nativeElement.querySelector('article');
        expect(article.textContent).toContain("MOCK_PASSWORD");
    })

    it("should display a phrase when no passport is given", async () => {
        await TestBed.configureTestingModule({
            declarations: [PasswordDisplayComponent, TestDefaultComponent]
        }).compileComponents();

        const fixture = TestBed.createComponent(TestDefaultComponent); // virtual browser
        fixture.autoDetectChanges();
        const article = fixture.nativeElement.querySelector('article');
        expect(article.textContent).toContain('Cliquez sur le bouton "Générer"');
    })
})