import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component.responsivo.css']
})
export class BigCardComponent {
  //o input faz com que o counteudo subsequente possa ser imputado parecido com o react
  @Input()
  img = ""
  @Input()
  titulo = ""
  @Input()
  texto = ""
  @Input()
  autor = ""
  @Input()
  alt = ""
  @Input()
  id = "0"

}
