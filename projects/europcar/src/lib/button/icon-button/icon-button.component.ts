import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
 
  @Input() button: { color: string, icon: string, metodo: (arg: number) => void, link: string };

  @Input() id!: number;

  constructor() {
    this.button = { color: "primary", icon: "edit", metodo: (arg:number) => {}, link: "" }
  }
}
