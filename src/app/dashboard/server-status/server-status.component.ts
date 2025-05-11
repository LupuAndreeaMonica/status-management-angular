import { Component } from '@angular/core';
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  constructor(private dashboard: DashboardService) {
  }
  currentStatus = this.dashboard.currentStatus;
}
