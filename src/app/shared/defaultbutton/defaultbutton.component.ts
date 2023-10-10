import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defaultbutton',
  templateUrl: './defaultbutton.component.html',
  styleUrls: ['./defaultbutton.component.css']
})
export class DefaultbuttonComponent {
  @Input() buttonText: string = 'Sample text';
  @Input() buttonStyles: any;
  @Input() buttonClass: string = '';
}
