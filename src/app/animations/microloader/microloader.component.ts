import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MicroLoadingService } from './service/microloading.service';

@Component({
  selector: 'app-microloader',
  templateUrl: './microloader.component.html',
  styleUrls: ['./microloader.component.css'],
})
export class MicroLoaderComponent {
  isMicroLoading$: Observable<boolean>;

  constructor(private microLoadingService: MicroLoadingService) {
    this.isMicroLoading$ = this.microLoadingService.isMicroLoading.asObservable();
  }
}
