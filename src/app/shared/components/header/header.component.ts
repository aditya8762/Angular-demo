import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Output() toggleSideBarFor: EventEmitter<any> = new EventEmitter();
  userMenu=[{title:'Profile'},{title:'Log Out'}];
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.toggleSideBarForMe.emit();
  }
  toggleCompact(){
    this.toggleSideBarFor.emit();
  }

}
