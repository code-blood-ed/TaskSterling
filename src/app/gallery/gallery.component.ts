import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
