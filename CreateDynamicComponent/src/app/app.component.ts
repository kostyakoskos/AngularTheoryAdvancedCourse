import { Component, ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private resolver: ComponentFactoryResolver){

  }

  showModal() {
  const modalFactory =  this.resolver.resolveComponentFactory(ModalComponent);
  }


}
