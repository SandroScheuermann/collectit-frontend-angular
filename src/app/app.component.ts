import { Component } from '@angular/core';
import { simpleFadeAnimation } from './animations/simple-slow-fade';
import { MicroLoadingService } from './animations/microloader/service/microloading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [simpleFadeAnimation],
})
export class AppComponent {
  title = 'GameCollector.Front';

  isMicroLoading$: Observable<boolean>;

  constructor(private microLoadingService: MicroLoadingService) {
    this.isMicroLoading$ = this.microLoadingService.isMicroLoading.asObservable();
  }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
