import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink,LoginpageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
