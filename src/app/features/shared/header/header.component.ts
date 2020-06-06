import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { SideBarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'ngrome-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public sidebarService: SideBarService,
    private renderer: Renderer2
  ) { }

  @ViewChild('sitemenu', { static: true })
  sitemenu: ElementRef;

  ngOnInit(): void {
    this.sidebarService.sidebarStatus$.subscribe((e) => {
      if (e === 'visible'){
        this.openSidebar();
      }
      else {
        this.closeSidebar();
      }
    });
  }

  private openSidebar() {
    this.renderer.addClass(document.body, 'site-menu--show');
    this.renderer.addClass(this.sitemenu.nativeElement, 'site-menu--show');
  }


  private closeSidebar() {
    this.renderer.removeClass(document.body, 'site-menu--show');
    this.renderer.removeClass(this.sitemenu.nativeElement, 'site-menu--show');
  }

}
