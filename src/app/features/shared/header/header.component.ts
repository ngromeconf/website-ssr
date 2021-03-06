import { Component, OnInit, Renderer2, ViewChild, ElementRef, Inject } from '@angular/core';
import { SideBarService } from '../../../services/sidebar.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ngrome-header',
  template: `<header class="site-header" role="banner">
    <h1 class="site-logo">
      <a [routerLink]="['/']" routerLinkActive="router-link-active" title="Go to NGRome Homepage">
        <svg width="56" height="60" viewBox="0 0 56 60" preserveAspectratio="xMinYMin">
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#FFF"
              d="M27.765 0l-.428.153L.953 9.586 0 9.927l.116 1.007L4.14 45.913l.075.652.573.318L27.148 59.3l.617.342.616-.342 22.36-12.417.573-.318.075-.652 4.025-34.979.116-1.007-.953-.34L28.192.152 27.765 0z"
            />
            <g fill="#DD0031">
              <path
                d="M32.323 32.405a.603.603 0 0 1 .604.605h1.242a1.84 1.84 0 0 0-.54-1.309 1.83 1.83 0 0 0-1.305-.541h-.001a1.85 1.85 0 0 0-1.845 1.851v1.229l1.242-.001V33.01c0-.334.27-.606.603-.606M18.408 12.113H9.397v1.245h9.726zM30.623 23.177h-3.325l.068-.04-1.746-3.039h-1.434l1.77 3.08H20.37v-1.156a.603.603 0 0 1 .604-.606.603.603 0 0 1 .604.606l1.242-.001a1.84 1.84 0 0 0-.542-1.308 1.83 1.83 0 0 0-1.304-.542h-.001c-.493 0-.956.193-1.305.543a1.84 1.84 0 0 0-.54 1.309v1.154H14.7v-1.152c0-.334.27-.606.604-.606.333 0 .604.272.604.606l1.242-.001a1.85 1.85 0 0 0-1.846-1.85 1.85 1.85 0 0 0-1.846 1.852l.001 1.151h-1.653v-3.079h-1.241v3.08H9.397v1.244h21.941l-.715-1.245zM24.537 17.645h-3.23l-1.73-3.01h-1.433l1.73 3.01h-8.07v-3.01h-1.24v3.01H9.396v1.245h15.855zM36.179 28.709h-2.803l.032-.019-1.746-3.039h-1.433l1.757 3.058h-5.94l-.001-1.227a.602.602 0 0 1 .604-.606.603.603 0 0 1 .604.605h1.242a1.84 1.84 0 0 0-.541-1.309 1.831 1.831 0 0 0-1.305-.54c-.494 0-.957.192-1.306.542a1.84 1.84 0 0 0-.54 1.309l.001 1.226h-4.43v-1.224a.603.603 0 0 1 .603-.606c.334 0 .605.271.605.605h1.241a1.85 1.85 0 0 0-1.845-1.85h-.001c-.493 0-.957.193-1.305.543a1.84 1.84 0 0 0-.54 1.308v1.224h-4.43v-1.221c0-.334.27-.606.603-.606.334 0 .605.271.605.605h1.241a1.85 1.85 0 0 0-1.845-1.85h-.001a1.85 1.85 0 0 0-1.845 1.852v1.22h-1.655v-3.01h-1.242v3.01H9.397v1.245h27.497l-.715-1.245zM46.56 24.422v-1.245H32.093l.715 1.245zM44.152 25.7v3.009h-6.526l.715 1.245h8.219v-1.245h-1.167v-3.01z"
              />
              <path
                d="M45.393 34.24v-3.01h-1.241v3.01H39.1l-1.688-2.936H35.98l1.688 2.937h-11.62v-1.227a.603.603 0 0 1 .604-.606.603.603 0 0 1 .604.606l1.242-.002a1.84 1.84 0 0 0-.542-1.308 1.831 1.831 0 0 0-1.304-.541h-.001c-.493 0-.956.193-1.305.543a1.84 1.84 0 0 0-.54 1.308v1.227h-4.43v-1.224a.602.602 0 0 1 .604-.606c.333 0 .604.271.604.605h1.242a1.85 1.85 0 0 0-1.846-1.85c-.494 0-.957.193-1.306.543-.348.35-.54.814-.54 1.308l.001 1.224h-4.43V33.02a.606.606 0 0 1 1.03-.43.603.603 0 0 1 .178.43l1.241-.002a1.84 1.84 0 0 0-.541-1.308 1.83 1.83 0 0 0-1.305-.541 1.85 1.85 0 0 0-1.845 1.851v1.22h-1.687v-2.936h-1.241v2.937H5.359l.143 1.244h44.525l.144-1.244h-4.778zM17.93 37.352v13.912l1.242.69V37.351zM21 37.352v15.617l1.242.69V37.351zM14.86 37.352v12.207l1.241.69V37.351zM11.79 37.352v10.502l1.241.69V37.351zM5.717 37.352l.876 7.616.297.165v-7.781zM27.141 37.352v19.027l.624.346.618-.343v-19.03zM8.72 37.352v8.797l1.24.69v-9.487zM24.071 37.352v17.322l1.241.69V37.352zM45.564 37.352v9.49l1.241-.69v-8.8zM30.212 37.352v18.014l1.241-.689V37.352zM42.493 37.352v11.194l1.242-.689V37.352zM48.634 37.352v7.784l.302-.168.877-7.616zM39.423 37.352v12.9l1.241-.69v-12.21zM33.282 37.352v16.31l1.242-.69v-15.62zM36.352 37.352v14.604l1.242-.689V37.352z"
              />
            </g>
          </g>
        </svg>
        <span>NG-Rome</span>
      </a>
      <button
        (click)="sidebarService.toggleSidebarStatus()"
        alt="Toggle NGRome Menu"
        class="site-menu--open"
        type="button"
        name="button"
      >
        <svg width="28" height="19">
          <g fill="none" fill-rule="evenodd">
            <path d="M-6-11h40v40H-6z" />
            <path fill="#FFF" d="M0 8h28v3H0zM0 16h21v3H0zM0 0h21v3H0z" />
          </g>
        </svg>
      </button>
    </h1>

    <nav class="site-menu" role="navigation" #sitemenu>
      <a [routerLink]="['/']" routerLinkActive="router-link-active" title="Go to NGRome Homepage">
        <h1 class="site-menu__logo">
          <svg width="99" height="107">
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#FFF"
                d="M28.98 0l-.445.159L.995 9.965 0 10.319l.12 1.047 4.202 36.36.078.677.597.33 23.34 12.908.644.356.644-.356 23.34-12.907.597-.33.079-.678 4.2-36.36.121-1.047-.994-.354L29.428.159 28.98 0z"
              />
              <g fill="#DD0031">
                <path
                  d="M33.74 33.684a.627.627 0 0 1 .63.63l1.296-.001c0-.514-.2-.997-.565-1.36a1.915 1.915 0 0 0-1.361-.563h-.001a1.927 1.927 0 0 0-1.926 1.925v1.276h1.297l-.001-1.277a.63.63 0 0 1 .63-.63M19.214 12.592H9.808v1.294h10.153zM31.965 24.092h-3.472l.072-.04-1.823-3.16h-1.496l1.847 3.2h-5.83v-1.2a.627.627 0 0 1 .63-.63.627.627 0 0 1 .631.63l1.296-.002a1.91 1.91 0 0 0-.565-1.36 1.915 1.915 0 0 0-1.361-.562h-.001c-.515 0-.999.2-1.362.564a1.91 1.91 0 0 0-.564 1.36v1.2h-4.624v-1.197a.631.631 0 0 1 1.261 0l1.296-.001a1.927 1.927 0 0 0-3.853.002v1.196h-1.725v-3.2h-1.296v3.2H9.81v1.294H32.71l-.746-1.294zM25.612 18.342H22.24l-1.805-3.128h-1.497l1.806 3.128h-8.422v-3.128h-1.296v3.128H9.808v1.294h16.55zM37.764 29.842h-2.926l.034-.019-1.823-3.159h-1.496l1.834 3.178h-6.2l-.001-1.275a.627.627 0 0 1 .63-.63.627.627 0 0 1 .631.63l1.296-.001c0-.514-.2-.997-.565-1.36a1.915 1.915 0 0 0-1.361-.563h-.001c-.515 0-.999.2-1.362.564a1.91 1.91 0 0 0-.564 1.36v1.275h-4.624V28.57a.627.627 0 0 1 .63-.63.63.63 0 0 1 .631.63l1.296-.001c0-1.06-.865-1.923-1.927-1.923-.515 0-.999.2-1.363.564a1.91 1.91 0 0 0-.563 1.36v1.272h-4.624v-1.269a.63.63 0 0 1 1.261 0l1.296-.001a1.927 1.927 0 0 0-3.853.002v1.268h-1.728v-3.128h-1.296v3.128H9.808v1.294H38.51l-.746-1.294zM48.6 25.386v-1.294H33.5l.746 1.294zM46.086 26.714v3.128h-6.811l.746 1.294H48.6v-1.294h-1.218v-3.128z"
                />
                <path
                  d="M47.382 35.593v-3.13h-1.296v3.13h-5.273l-1.76-3.053h-1.497l1.762 3.053H27.189v-1.276a.627.627 0 0 1 .63-.63.627.627 0 0 1 .631.63l1.296-.001a1.91 1.91 0 0 0-.565-1.36 1.915 1.915 0 0 0-1.361-.563h-.002c-.514 0-.998.2-1.362.564a1.91 1.91 0 0 0-.563 1.36v1.276H21.27V34.32a.627.627 0 0 1 .63-.63c.348 0 .63.282.63.63l1.297-.001c0-1.06-.865-1.923-1.927-1.923-.515 0-1 .201-1.363.565a1.91 1.91 0 0 0-.563 1.36v1.272H15.35v-1.27a.63.63 0 0 1 1.26 0h1.296c0-.515-.2-.998-.564-1.36a1.915 1.915 0 0 0-1.362-.563h-.001a1.927 1.927 0 0 0-1.926 1.924l.001 1.269h-1.761V32.54h-1.296v3.053H5.594l.15 1.294h46.475l.15-1.294h-4.987zM18.716 38.827v14.461l1.296.717V38.827zM21.92 38.827V55.06l1.297.716v-16.95zM15.511 38.827v12.689l1.296.716V38.827zM12.306 38.827v10.916l1.296.717V38.827zM5.968 38.827l.914 7.917.31.171v-8.088zM28.33 38.827v19.778l.651.36.645-.357V38.827zM9.101 38.827v9.144l1.296.717v-9.861zM25.126 38.827v18.006l1.295.716V38.827zM47.56 38.827v9.864l1.295-.717v-9.147zM31.535 38.827v18.725l1.296-.716v-18.01zM44.355 38.827v11.636l1.296-.716v-10.92zM50.764 38.827v8.091l.316-.174.915-7.917zM41.15 38.827v13.408l1.296-.716V38.827zM34.74 38.827V55.78l1.296-.716V38.827zM37.945 38.827v15.18l1.296-.716V38.827z"
                />
              </g>
              <path
                fill="#FFF"
                d="M3.911 77.321l10.303 9.517v-8.79h2.881v15.273L6.813 83.804v8.79H3.911V77.32zm23.435 9.868v-2.367h7.195a9.317 9.317 0 0 1-.396 3.134 7.443 7.443 0 0 1-1.393 2.595 6.58 6.58 0 0 1-2.329 1.764c-.928.43-1.996.644-3.202.644-1.511 0-2.852-.322-4.024-.965a7.043 7.043 0 0 1-2.755-2.688c-.665-1.149-.998-2.477-.998-3.985 0-1.509.34-2.83 1.019-3.965a7.049 7.049 0 0 1 2.797-2.646c1.185-.63 2.533-.945 4.044-.945 1.484 0 2.759.301 3.826.903a7.443 7.443 0 0 1 2.6 2.418l-2.558 1.495a4.63 4.63 0 0 0-1.508-1.536c-.63-.402-1.417-.602-2.36-.602a4.9 4.9 0 0 0-2.391.591 4.398 4.398 0 0 0-1.716 1.682c-.422.726-.634 1.594-.634 2.605 0 1.01.208 1.888.624 2.635.416.748.98 1.325 1.695 1.734.714.408 1.521.612 2.422.612 1.192 0 2.121-.298 2.787-.893a4.72 4.72 0 0 0 1.393-2.22h-4.138zm18.423.124v5.272h-2.995v-14.53h4.908c1.15 0 2.131.195 2.942.582.811.387 1.432.93 1.861 1.63.43.698.645 1.511.645 2.438 0 1.024-.267 1.906-.8 2.647-.534.74-1.293 1.276-2.278 1.608l3.951 5.625h-3.556l-3.41-5.272H45.77zm0-2.366h1.726c.776 0 1.393-.19 1.85-.57.458-.381.687-.91.687-1.589 0-.692-.23-1.228-.687-1.608-.457-.38-1.074-.571-1.85-.571h-1.726v4.338zm9.086.374c0-1.107.195-2.121.583-3.041a7.151 7.151 0 0 1 1.622-2.387 7.434 7.434 0 0 1 2.443-1.567c.936-.374 1.951-.56 3.046-.56 1.11 0 2.128.186 3.057.56a7.58 7.58 0 0 1 2.443 1.567c.7.67 1.241 1.467 1.622 2.387.382.92.572 1.934.572 3.04 0 1.094-.19 2.107-.572 3.041a7.275 7.275 0 0 1-1.6 2.429 7.29 7.29 0 0 1-2.434 1.598c-.936.38-1.965.57-3.088.57s-2.152-.19-3.088-.57a7.29 7.29 0 0 1-2.433-1.598 7.274 7.274 0 0 1-1.6-2.429c-.382-.934-.573-1.947-.573-3.04zm3.161 0c0 .927.194 1.75.582 2.47a4.33 4.33 0 0 0 1.602 1.691c.679.408 1.462.612 2.35.612.887 0 1.67-.204 2.35-.612a4.328 4.328 0 0 0 1.6-1.691c.388-.72.582-1.543.582-2.47 0-.928-.187-1.751-.561-2.47a4.184 4.184 0 0 0-1.58-1.692c-.68-.408-1.477-.612-2.392-.612-.887 0-1.67.204-2.35.612a4.33 4.33 0 0 0-1.6 1.692c-.389.719-.583 1.542-.583 2.47zm17.342-.748l-.936 8.012h-3.119l2.163-15.256 6.113 9.361 6.072-9.36 2.204 15.255h-3.16l-.936-8.012-4.18 6.663-4.22-6.663zm17.28 1.536v3.944h6.363v2.532H89.727v-14.53H99v2.533h-6.363v3.051h5.947v2.47h-5.947zM6.306 101.276l-.64 5.67H4.039l1.28-9.782 3.827 6.321 3.84-6.32 1.28 9.78h-1.64l-.64-5.655-2.84 4.79-2.84-4.804zm13.092 0l-.64 5.67h-1.626l1.28-9.782 3.826 6.321 3.84-6.32 1.28 9.78h-1.64l-.64-5.655-2.84 4.79-2.84-4.804zm16.2-3.646h1.92l-2.827 4.471 3.026 4.845h-1.92l-2-3.58-2.066 3.58h-1.907l3.093-4.845-2.773-4.471h1.92l1.747 3.14 1.786-3.14zm5.652 9.316V97.63h1.6v9.316h-1.6zm10.906-9.316h1.92l-2.827 4.471 3.027 4.845h-1.92l-2-3.58-2.067 3.58h-1.906l3.093-4.845-2.773-4.471h1.92l1.746 3.14 1.787-3.14z"
              />
            </g>
          </svg>
          <span>Ng Rome - Menu di navigazione</span>
        </h1>
      </a>

      <ngrome-menu></ngrome-menu>

      <div class="site-menu__info">
        <p>October 24th, 2020 Teatro Italia, Rome Italy</p>
        <a
          class="button button--white button--fill"
          rel="noopener"
          target="_blank"
          href="https://ti.to/ngrome-conf/mmxx"
          title="Go to Tickets Page"
        >
          <svg width="20" height="14">
            <g fill="none" fill-rule="evenodd" stroke="#EE0C3E" stroke-width="2">
              <path
                d="M18.422 9.819c-1.12-.422-1.91-1.53-1.91-2.819s.79-2.397 1.91-2.819V1H1.312v3.181c1.119.422 1.91 1.53 1.91 2.819s-.791 2.397-1.91 2.819V13h17.11V9.819zM7 1.462V13"
              />
            </g>
          </svg>
          Get Ticket
        </a>
      </div>
      <button
        (click)="sidebarService.toggleSidebarStatus()"
        alt="Close Menu"
        class="site-menu--close"
        type="button"
        name="site menu close"
        aria-label="Close Menu"
      >
        <svg width="21" height="21">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M.368 18.717L18.753.332l1.414 1.415L1.782 20.13z" />
            <path d="M1.782.869l18.385 18.384-1.414 1.415L.368 2.283z" />
          </g>
        </svg>
      </button>
    </nav>
  </header> `,
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(Renderer2) private renderer: Renderer2,
    @Inject(SideBarService) public sidebarService: SideBarService
  ) {}

  @ViewChild('sitemenu', { static: true })
  sitemenu: ElementRef;

  ngOnInit(): void {
    this.sidebarService.sidebarStatus$.subscribe((e) => {
      if (e === 'visible') {
        this.openSidebar();
      } else {
        this.closeSidebar();
      }
    });
  }

  private openSidebar() {
    this.renderer.addClass(this.document.body, 'site-menu--show');
    this.renderer.addClass(this.sitemenu.nativeElement, 'site-menu--show');
  }

  private closeSidebar() {
    this.renderer.removeClass(this.document.body, 'site-menu--show');
    this.renderer.removeClass(this.sitemenu.nativeElement, 'site-menu--show');
  }
}
