import { Component } from '@angular/core';
import { trigger, transition, state, useAnimation, style, animate } from '@angular/animations';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

import { SideBarService } from './services/sidebar.service';



@Component({
  selector: 'app-root',
  template: `
    <ngrome-header></ngrome-header>
    <!-- ngrome-logo (animationToggled)='showContainer()'></ngrome-logo -->
    <main
      class="site-content"
      role="main"
      [@animateContainer]="containerStatus"
      >
      <router-outlet></router-outlet>
    </main>
    <ngrome-footer></ngrome-footer>
    <div class="site-menu--close--full" #siteMenuClose></div>
  `,
  animations: [
    trigger('animateContainer', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate(2000, style({opacity: 0}))),
      transition('hidden => visible', animate(2000, style({opacity: 1}))),
    ]),
  ]
})
export class AppComponent {

  containerStatus = 'hidden';

  constructor(
    private sidebarService: SideBarService,
    private router: Router) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.hideContainer();
        window.scroll(0, 0);
      }
      if (event instanceof NavigationEnd) {

        this.showContainer();

        // Close the sidebar if is open after the navigation is complete
        if (this.sidebarService.getSidebarStatus() === 'visible') {
          this.sidebarService.toggleSidebarStatus(true);
        }
      }
    });

  }

  showContainer() {
    if (this.containerStatus !== 'visible') {
      setTimeout(() => {
        this.containerStatus = 'visible';
      });
    }
  }

  hideContainer() {
    this.containerStatus = 'hidden';
  }

  openCloseSidebar() {
    this.sidebarService.toggleSidebarStatus();
  }


}
