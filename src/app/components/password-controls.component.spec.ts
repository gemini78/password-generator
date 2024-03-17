import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PasswordControlsComponent } from "./password-controls.component";
import { Component } from "@angular/core";


@Component({
    selector: 'test',
    template: `
    <password-controls (generate)="onGenerate()"></password-controls>
    `
})
class TestComponent {
    test = false;
    onGenerate() {
        this.test = true;
    }
}

describe('PasswordControlsComponent', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent
    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [PasswordControlsComponent, TestComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent); // virtual browser
        fixture.autoDetectChanges();
        component = fixture.componentInstance;
    })
    it('should emit an "generate" event when user clicks the button ', async () => {
        fixture.nativeElement.querySelector('button').click();
        expect(component.test).toBeTrue();
    })
})