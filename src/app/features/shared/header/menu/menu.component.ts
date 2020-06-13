import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-menu',
  template: `
    <ul class="site-menu__nav">
      <!-- <li>
        <a routerLink="/speakers"
        title="Go to NGRome Speakers page">
          <svg width="18" height="25">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2" transform="translate(-4 -.5)">
              <path d="M21 9v2.857C21 15.802 17.744 19 13.727 19h-1.454C8.256 19 5 15.802 5 11.857V9"/>
              <rect width="8" height="13" x="9" y="2" rx="4"/>
              <path stroke-linecap="square" d="M13 20v4M16.943 24H9"/>
            </g>
          </svg>
          Speakers
        </a>
      </li> -->
      <!-- <li>
        <a [routerLink]="/sponsors" routerLinkActive="router-link-active"
        title="Go to NGRome Sponsors page">
          <svg width="20" height="21">
            <path fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2" d="M1 20.5v-17a2 2 0 0 1 2-2h14l-3.068 4.35L17 9.5H4"/>
          </svg>
          Sponsors
        </a>
      </li> -->
      <!-- <li>
        <a [routerLink]="/agenda" routerLinkActive="router-link-active"  title="Agenda">
          <svg width="20" height="21">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2" transform="translate(-3 -2.5)">
              <rect width="16" height="18" x="6" y="4" rx="2"/>
              <path stroke-linecap="square" d="M5.786 9H4M5.786 17H4M10 4v18"/>
            </g>
          </svg>
          Agenda
        </a>
      </li> -->
      <!-- <li>
        <a [routerLink]="['/workshops']" routerLinkActive="router-link-active"
        title="Go to NGRome Workshops page">
          <svg width="22" height="24">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2" transform="translate(-2, 0)">
                <g>
                    <path d="M4,15 L22,15 L22,5 C22,4.44771525 21.5522847,4 21,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,15 Z" id="Rectangle"></path>
                    <path d="M3.55800376,15 L2.06464946,18.6185123 C2.01471792,18.7395003 1.98902339,18.8691136 1.98902339,19 C1.98902339,19.5522847 2.43673864,20 2.98902339,20 L23.0255734,20 C23.1549356,20 23.2830689,19.9749003 23.4028703,19.9260924 C23.9143369,19.717717 24.160041,19.1341698 23.9516657,18.6227031 L22.4757496,15 L3.55800376,15 Z" id="Rectangle-Copy"></path>
                </g>
            </g>
          </svg>
          Workshops
        </a>
      </li> -->
      <li>
        <a [routerLink]="['/diversity']" routerLinkActive="router-link-active" title="About">
          <svg width="26" height="26">
            <g
              id="S/Icons/edu/white"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                d="M12.5339103,6.18897514 C12.5121453,6.18025059 12.4878551,6.18025059 12.4660901,6.18897514 L1.58517921,10.5506204 C1.5614872,10.5601174 1.54286347,10.5791143 1.53383836,10.6029901 C1.51604093,10.6500729 1.53978141,10.7026687 1.5868642,10.7204661 L12.4677751,14.8334816 C12.4885415,14.8413313 12.511459,14.8413313 12.5322253,14.8334816 L23.4131362,10.7204661 C23.437012,10.711441 23.456009,10.6928173 23.465506,10.6691253 C23.484234,10.6224048 23.4615417,10.5693484 23.4148212,10.5506204 L12.5339103,6.18897514 Z"
                id="Rectangle"
                stroke="#FFFFFF"
                stroke-width="2"
              ></path>
              <path
                d="M19,13 L19,18 C17.5314927,19.3518519 15.3571583,20.0277778 12.4769965,20.0277778 C9.5968348,20.0277778 7.43783596,19.3518519 6,18 L6,13"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="2"
              ></path>
              <path
                d="M23,10.2128751 L23,14.5356988"
                id="Line-12"
                stroke="#FFFFFF"
                stroke-width="2"
              ></path>
              <circle id="Oval" fill="#FFFFFF" cx="23" cy="15" r="2"></circle>
            </g>
          </svg>
          Diversity
        </a>
      </li>
      <li>
        <a [routerLink]="['/about']" routerLinkActive="router-link-active" title="About">
          <svg width="20" height="23">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2">
              <path
                d="M0 1.5h20M6 5.5h8M6 9.5h4M0 14.5h20M3 2.1v11.4M17 2.1v11.4M8 17.5l-2.5 4.583M12 17.5l2.5 4.583M10 17.5V22"
              />
            </g>
          </svg>
          About
        </a>
      </li>
      <li>
        <a
          [routerLink]="['/info']"
          routerLinkActive="router-link-active"
          title="Go to NGRome Info page"
        >
          <svg width="22" height="21">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2">
              <path
                d="M20.016 4.47l-6.005-2.862-7.006 3.34L1 2.083v14.451l6.005 2.863 7.006-3.34 6.005 2.863V4.471zM7 5v14.878M14 2.031V17.84"
              />
            </g>
          </svg>
          Info
        </a>
      </li>
      <!-- li>
        <a href="javascript:void(0);" title="Newsroom">
          <svg width="20" height="18">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2">
              <path d="M5 7.5H1v7a2 2 0 1 0 4 0v-7z"/>
              <path d="M4.11 16.5H17a2 2 0 0 0 2-2v-13H5v6.403l-.005.104L4.11 16.5zM8 6.5h8M8 10.5h5"/>
            </g>
          </svg>
          Newsroom
        </a>
      </li-->
    </ul>
  `,
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
