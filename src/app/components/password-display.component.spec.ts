import { TestBed } from "@angular/core/testing";
import { PasswordDisplayComponent } from "./password-display.component";
import { Component } from "@angular/core";


@Component({
    selector: 'test',
    template: `
    <password-display message="MOCK_MESSAGE"></password-display>
    `
})
class TestComponent { }

describe("PasswordDisplayComponent", () => {
    it("should display the input message", async () => {
        await TestBed.configureTestingModule({
            declarations: [PasswordDisplayComponent, TestComponent]
        }).compileComponents();

        const fixture = TestBed.createComponent(TestComponent); // virtual browser
        fixture.autoDetectChanges();
        const article = fixture.nativeElement.querySelector('article');
        expect(article.textContent).toContain("MOCK_MESSAGE");
    })
})