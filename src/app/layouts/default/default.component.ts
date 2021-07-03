import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService ) { }

  ngOnInit(): void {
  }
  toggle(){
    this.sidebarService.toggle(true,'left');
  }
  toggleCompact(){
    this.sidebarService.toggle(true,'right');
  }
}
