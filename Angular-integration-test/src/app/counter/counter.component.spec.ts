import {ComponentFixture, TestBed} from '@angular/core/testing'
import { By } from '@angular/platform-browser';
import {CounterComponent} from "./counter.component";

describe('CounterComponent', () => {
  let component: CounterComponent
  let fixture: ComponentFixture<CounterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })

    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance
    // fixture.debugElement
    // fixture.nativeElement
  })

  it('should be created', () => {
    expect(component).toBeDefined()
  })

  it('Test binding. Counter default value = 0. Check in template counter', () => {
    let temp = 123123;
    component.counter = temp;

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.counter'))

    let el: HTMLElement = de.nativeElement;

    expect(el.textContent).toContain(temp.toString());
  })

  it('Should add green class if counter is even', () => {
    component.counter = 6;

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = de.nativeElement;

    expect(el.classList.contains('green')).toBeTruthy();
  })

  it('If click on button counter++',() => {
    let btn = fixture.debugElement.query(By.css('#increment'));
    btn.triggerEventHandler('click',null);

    expect(component.counter).toBe(1);
  })

})
