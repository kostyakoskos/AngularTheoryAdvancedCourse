import { FormBuilder } from "@angular/forms";
import { CounterComponent } from "./counter.component"

describe('Counter component', () => {

    let com: CounterComponent;

    beforeEach(() => {
        com = new CounterComponent(new FormBuilder);
    })

    it('should return counter + 1', () => {
        com.increment();
        expect(com.counter).toBe(1);
    })

    it('should return counter - 1', () => {
        com.decrement();
        expect(com.counter).toBe(-1);
    })

    it('should create form with 2 controls(login, email) ', () => {
        // expect(com.form.contains('login')).toBe(true);
        expect(com.form.contains('email')).toBeTruthy();
    })

    it('if login isemppty', () => {
        const control = com.form.get('login');

        control?.setValue('');

        expect(control?.valid).toBeFalsy();
    })

})