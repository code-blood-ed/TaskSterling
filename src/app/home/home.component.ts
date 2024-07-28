import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RegistrationpageComponent } from '../registrationpage/registrationpage.component';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { TrackappComponent } from '../trackapp/trackapp.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RegistrationpageComponent,RouterLink,TrackappComponent,AboutComponent,GalleryComponent,
    ContactComponent,LoginpageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
