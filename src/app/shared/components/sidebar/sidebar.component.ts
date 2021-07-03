import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items: NbMenuItem[]=[
    {
      title: 'Profile',
      icon: 'person-outline',
      link:'/'
    },
    {
      title: 'Posts',
      icon: 'bar-chart-outline',
      link:'/posts',
    },
    {
      title: 'Folder',
      icon: 'folder-outline',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];

}
