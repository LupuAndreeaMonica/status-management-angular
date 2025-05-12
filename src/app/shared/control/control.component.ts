import {Component, ElementRef, HostListener, inject, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control', // host element
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked')
  // }
  label = input<string>()
  private el = inject(ElementRef);
  onClick() {
    console.log('clicked')
    console.log('el', this.el)
  }
}
