import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MicroLoadingService } from 'src/app/animations/microloader/service/microloading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private microLoadingService: MicroLoadingService) {
  }

  redirecionarParaRegistro() {
    this.router.navigate(['/register']);
  }
}
