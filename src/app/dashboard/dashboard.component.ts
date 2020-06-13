import { Component, OnInit, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

declare var $: any;
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements AfterViewInit {
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  system: boolean = false;
  remove: boolean = true;
  removeTextInterval
  addTextInterval

  constructor(private breakpointObserver: BreakpointObserver) { }

  public ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
    this.removeTextInterval = setInterval(() => {
      this.removeText()
    }, 500)
  }


  removeText() {
    let text = document.querySelectorAll('.textChange')[0].innerHTML
    let i = text.length
    if (this.remove) {
      i--
      text = text.substring(0, i)
      document.querySelectorAll('.textChange')[0].innerHTML = text
      if (i == 13) {
        this.remove = false
        this.system ? this.system = false : this.system = true
        clearInterval(this.removeTextInterval)
        this.addTextInterval = setInterval(() => {
          this.addText()
        }, 500)
      }
    }
  }

  async addText() {
    let text = document.querySelectorAll('.textChange')[0].innerHTML
    let textNew = this.system ? 'stemas' : 'tes'

    if (this.system) {
      if (text.length < 19) {
        let sum = (text.length + textNew.length)
        let pos = sum - 19
        let sub = textNew.substr(pos, 1)
        document.querySelectorAll('.textChange')[0].innerHTML = text + sub
      }
      if (text.length == 19) {
        this.remove = true
        clearInterval(this.addTextInterval)
        this.removeTextInterval = setInterval(() => {
          this.removeText()
        }, 500)
      }
    } else {
      if (text.length < 16) {
        let sum = (text.length + textNew.length)
        let pos = sum - 19
        let sub = textNew.substr(pos, 1)
        document.querySelectorAll('.textChange')[0].innerHTML = text + sub
      }
      if (text.length == 16) {
        this.remove = true
        clearInterval(this.addTextInterval)
        this.removeTextInterval = setInterval(() => {
          this.removeText()
        }, 500)
      }
    }
  }
}



