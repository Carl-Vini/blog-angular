import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card.component.responsivo.css']
})
export class SmallCardComponent {
  noticias = [
   {
    titulo: "Pandas em risco de extinção tomam o estado da China e promovem o Kung Fu gratuito nas fabricas de Iphone. Entenda!",
    img: "https://dm0fehhuxv6f6.cloudfront.net/wp-content/uploads/2023/04/30035515/bing-panda-600x600.jpg",
    autor: "Fernanda Lima"
   },
   {
    titulo: "Pandas em risco de extinção tomam o estado da China e promovem o Kung Fu gratuito nas fabricas de Iphone. Entenda!",
    img: "https://dm0fehhuxv6f6.cloudfront.net/wp-content/uploads/2023/04/30035515/bing-panda-600x600.jpg",
    autor: "Fernanda Lima"
   },
   {
    titulo: "Pandas em risco de extinção tomam o estado da China e promovem o Kung Fu gratuito nas fabricas de Iphone. Entenda!",
    img: "https://dm0fehhuxv6f6.cloudfront.net/wp-content/uploads/2023/04/30035515/bing-panda-600x600.jpg",
    autor: "Fernanda Lima"
   },
   {
    titulo: "Pandas em risco de extinção tomam o estado da China e promovem o Kung Fu gratuito nas fabricas de Iphone. Entenda!",
    img: "https://dm0fehhuxv6f6.cloudfront.net/wp-content/uploads/2023/04/30035515/bing-panda-600x600.jpg",
    autor: "Fernanda Lima"
   }
  ]
}
