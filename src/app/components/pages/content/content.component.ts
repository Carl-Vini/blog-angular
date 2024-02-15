import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../../data/data';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,MenuBarComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  img: string = ""
  @Input()
  alt: string = ''
  @Input()
  titulo: string = ''
  @Input()
  texto: string = ''
  @Input()
  private id: string | null = '0'
 
constructor(
  private route: ActivatedRoute
  ) {}

ngOnInit():void {
  this.route.paramMap.subscribe(value =>
    this.id = value.get('id')
    )

    this.setValuesToContent(this.id)
}
 
setValuesToContent(id:string | null) {
  const result = data.filter(article => article.id == id)[0]

  console.log(result)

  this.titulo = result.titulo
  this.texto = result.texto
  this.img = result.img
  // if(!result) {
  //   this.titulo = result.titulo
  // }
}

}
