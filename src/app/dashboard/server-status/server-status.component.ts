import {Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline') // this.dashboard.currentStatus;
  // private interval?: ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log('current status', this.currentStatus)
    });
  } // private dashboard: DashboardService
  ngOnInit() {
    // this.interval =  setInterval
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }

}
