import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,AboutComponent,GalleryComponent,ContactComponent, ContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
