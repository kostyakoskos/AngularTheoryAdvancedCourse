import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app=counter',
    template: `Counter: {{counter}}`
})

export class CounterComponent{
    counter = 0;

    public form: FormGroup = new FormGroup({

    });


    constructor(private fb: FormBuilder){
        this.form = fb.group({
            login: ['', Validators.required],
            email: ['']
        })
    }


    increment(){
        this.counter++;
    }

    decrement(){
        this.counter--;
    }
}