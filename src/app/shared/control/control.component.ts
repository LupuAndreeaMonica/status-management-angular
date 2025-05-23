import {
  AfterContentInit, afterNextRender, afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostListener,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked')
  // }
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  constructor() {
    afterRender(() => {
      console.log('afterRender')
    });
    afterNextRender(() => {
      console.log('afterNextRender')
    })
  }

  label = input<string>()
  private el = inject(ElementRef);
  onClick() {
    console.log('clicked')
    console.log('el', this.el)
    // console.log(this.control)
    console.log(this.control())
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }
}
