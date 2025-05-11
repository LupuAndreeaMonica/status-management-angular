import { Component } from '@angular/core';
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  constructor (private dashboard: DashboardService){}
  dummyTrafficData = this.dashboard.dummyTrafficData;
  maxTraffic = this.dashboard.maxTraffic;
}
