import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MicroLoadingService {
  public isMicroLoading = new BehaviorSubject<boolean>(false);

  show() {
    this.isMicroLoading.next(true);
  }

  hide() {
    this.isMicroLoading.next(false);
  }
}
