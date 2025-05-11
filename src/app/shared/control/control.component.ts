import {Component, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control', // host element
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  label = input<string>()
}
