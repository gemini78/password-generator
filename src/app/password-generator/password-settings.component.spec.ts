import { Component } from "@angular/core"
import { Settings } from "./types"
import { TestBed } from "@angular/core/testing";
import { PasswordSettingsComponent } from "./password-settings.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'test',
    template: `
    <password-settings (settings-change)="onChange($event)"></password-settings>
    `
})
class TestDefaultComponent {
    onChange(setting: Settings) { }
}

@Component({
    selector: 'test',
    template: `
    <password-settings [default-settings]="{length: 30, uppercase: true, numbers: true, symbols: true}"></password-settings>
    `
})
class TestInputComponent {
    onChange(setting: Settings) { }
}

describe('PasswordSettingsComponent', () => {
    it("should represents settings in the HTML tags", async () => {
        TestBed.configureTestingModule({
            declarations: [TestDefaultComponent, PasswordSettingsComponent],
            imports: [FormsModule]
        }).compileComponents();

        const fixture = TestBed.createComponent(TestDefaultComponent); // virtual browser
        fixture.autoDetectChanges();

        await fixture.whenStable();

        const lengthInput = fixture.nativeElement.querySelector('#length')
        const symbolsInput = fixture.nativeElement.querySelector('#symbols')
        const numbersInput = fixture.nativeElement.querySelector('#numbers')
        const uppercaseInput = fixture.nativeElement.querySelector('#uppercase')

        expect(lengthInput.value).toBe('20');
        expect(symbolsInput.checked).toBeFalse();
        expect(numbersInput.checked).toBeFalse();
        expect(uppercaseInput.checked).toBeFalse();
    })

    it("should accept initial settings from the outside", async () => {
        TestBed.configureTestingModule({
            declarations: [TestInputComponent, PasswordSettingsComponent],
            imports: [FormsModule]
        }).compileComponents();

        const fixture = TestBed.createComponent(TestInputComponent); // virtual browser
        fixture.autoDetectChanges();

        await fixture.whenStable();

        const lengthInput = fixture.nativeElement.querySelector('#length')
        const symbolsInput = fixture.nativeElement.querySelector('#symbols')
        const numbersInput = fixture.nativeElement.querySelector('#numbers')
        const uppercaseInput = fixture.nativeElement.querySelector('#uppercase')

        expect(lengthInput.value).toBe('30');
        expect(symbolsInput.checked).toBeTrue();
        expect(numbersInput.checked).toBeTrue();
        expect(uppercaseInput.checked).toBeTrue();
    })

    it("should emit an event with settings each time user changes HTML inputs", async () => {
        TestBed.configureTestingModule({
            declarations: [TestDefaultComponent, PasswordSettingsComponent],
            imports: [FormsModule]
        }).compileComponents();

        const fixture = TestBed.createComponent(TestDefaultComponent); // virtual browser
        fixture.autoDetectChanges();
        const component = fixture.componentInstance;
        const spy = spyOn(component, "onChange")

        const verifyCheckbox = (id: 'symbols' | 'numbers' | 'uppercase', expectedValue: Settings) => {
            fixture.nativeElement.querySelector("#" + id).click();
            expect(spy).toHaveBeenCalledWith(expectedValue)
        }
        verifyCheckbox('numbers', {
            length: 20,
            uppercase: false,
            numbers: true,
            symbols: false,
        })

        verifyCheckbox('symbols', {
            length: 20,
            uppercase: false,
            numbers: true,
            symbols: true,
        })

        verifyCheckbox('uppercase', {
            length: 20,
            uppercase: true,
            numbers: true,
            symbols: true,
        })

        const lengthInput = fixture.nativeElement.querySelector('#length');
        lengthInput.value = "38";
        lengthInput.dispatchEvent(new Event('input'))
        expect(spy).toHaveBeenCalledWith({
            length: 38,
            uppercase: true,
            numbers: true,
            symbols: true,
        })
    })
})