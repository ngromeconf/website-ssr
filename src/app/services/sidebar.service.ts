import {BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {

  private sidebarStatus = 'hidden';
  sidebarStatus$: BehaviorSubject<string> = new BehaviorSubject(this.sidebarStatus);

  public toggleSidebarStatus = (status = false) => {
    if (!status) {
      this.sidebarStatus$.next(this.sidebarStatus === 'hidden' ? 'visible' : 'hidden');
      this.updateSidebarStatus();
    } else if (status && this.sidebarStatus === 'visible') {
      this.sidebarStatus$.next('hidden');
      this.updateSidebarStatus();
    }
    return;
  }

  public getSidebarStatus(){
    return this.sidebarStatus;
  }

  updateSidebarStatus = () => this.sidebarStatus = this.sidebarStatus === 'hidden' ? 'visible' : 'hidden';

}

