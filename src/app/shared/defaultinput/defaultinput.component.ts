import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defaultinput',
  templateUrl: './defaultinput.component.html',
  styleUrls: ['./defaultinput.component.css']
})
export class DefaultinputComponent {
  @Input() placeholder: string = '';
  @Input() type: string = '';
}
