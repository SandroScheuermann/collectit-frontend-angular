import { Component } from '@angular/core';
import { simpleFadeAnimation } from './animations/simple-slow-fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [simpleFadeAnimation],
})
export class AppComponent {
  title = 'GameCollector.Front';

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
