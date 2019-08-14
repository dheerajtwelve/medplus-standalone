import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
 /* pages = [
    {
      title: 'First Page with Tabs',
      url: '/menu/first'
    },
    {
      title: 'Workflowtabs',
      url: '/menu/workflow'
    },
    {
      title: 'Dashboard',
      url: '/menu/workflow/tabs/dashboard'
    },
    {
      title: 'Task',
      url: '/menu/workflow/tabs/tasks'
    },
    {
      title: 'Rollcall',
      url: '/menu/rollcall'
    },
    {
      title: 'History',
      url: '/menu/rollcall/tabs/history'
    },
    {
      title: 'Submit Request',
      url: '/menu/rollcall/tabs/submitreq'
    },
    {
      title: 'Second Page blank',
      url: '/menu/second'
    },
    {
      title: 'Workflow',
      url: '/menu/workflow/tasks'
    }
  ]; */

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Workflow',
      children: [
        {
          title: 'Dashboard',
          url: '/menu/workflow/tabs/dashboard',
          icon: 'git-network'
        },
        {
          title: 'Task',
          url: '/menu/workflow/tabs/tasks',
          icon: 'clipboard'
        },
      ]
    },
    {
      title: 'Rollcall',
      children: [
        {
          title: 'History',
           url: '/menu/rollcall/tabs/history',
          icon: 'timer'
        },
        {
          title: 'Submit Request',
          url: '/menu/rollcall/tabs/submitreq',
          icon: 'clipboard'
        },
      ]
    },

  ];
 
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
 
  ngOnInit() {
 
  }
 
}
