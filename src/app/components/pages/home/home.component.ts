import { Component } from '@angular/core';
import { BigCardComponent } from '../../big-card/big-card.component';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../menu-title/menu-title.component';
import { SmallCardComponent } from '../../small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, MenuBarComponent,MenuTitleComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.responsivo.css' ]
})
export class HomeComponent {

}
