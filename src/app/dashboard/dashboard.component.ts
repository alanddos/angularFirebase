import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [//celular
          { title: 'Card 1', cols: 1, rows: 2 , app: ''},
          { title: 'Card 2', cols: 1, rows: 1 , app: ''},
          { title: 'Card 3', cols: 1, rows: 1 , app: ''},
          { title: 'Card 4', cols: 1, rows: 1 , app: ''}
        ];
      }

      return [//web
        { title: 'Card 1', cols: 1.2, rows: 2 , app: ''},
        { title: 'Card 2', cols: 1, rows: 1 , app: ''},
        { title: 'Card 3', cols: 1, rows: 2 , app: ''},
        { title: 'Card 4', cols: 1, rows: 1 , app: ''}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
