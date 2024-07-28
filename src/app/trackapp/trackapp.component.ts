import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-trackapp',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './trackapp.component.html',
  styleUrl: './trackapp.component.css'
})
export class TrackappComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
