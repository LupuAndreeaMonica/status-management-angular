import {AfterViewInit, Component, ElementRef, output, viewChild, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
    imports: [
        ButtonComponent,
        ControlComponent,
        FormsModule
    ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
    // @ViewChild('form') form?: ElementRef<HTMLFormElement>; // look for #form
    private form = viewChild<ElementRef<HTMLFormElement>>('form');
    add = output<{title: string; text: string}>();

    enteredTitle = '';
    enteredText = '';

    onSubmit() {
        this.add.emit({title: this.enteredTitle, text: this.enteredText})
        // this.form()?.nativeElement.reset();
        this.enteredText = '';
        this.enteredTitle = ''
    }
    ngAfterViewInit() {
        console.log('after viwe init')
    }
}
