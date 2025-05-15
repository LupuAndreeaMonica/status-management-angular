import { Component } from '@angular/core';
// import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
// import {SupportTicketsComponent} from "./dashboard/support-tickets/support-tickets.component";
// import {TrafficComponent} from "./dashboard/traffic/traffic.component";
// import {HeaderComponent} from "./header/header.component";
// import {DashboardItemComponent} from "./dashboard/dashboard-item/dashboard-item.component";
import { RectComponent } from './rect/rect.component';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    // HeaderComponent,
    // ServerStatusComponent,
    // SupportTicketsComponent,
    // TrafficComponent,
    // DashboardItemComponent,
    RectComponent,
    FormsModule
  ]
})
export class AppComponent {
  rectSize = {
    width: '100',
    height: '100',
  };
}
