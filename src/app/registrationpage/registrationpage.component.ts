import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-registrationpage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './registrationpage.component.html',
  styleUrl: './registrationpage.component.css'
})
export class RegistrationpageComponent {
  functionSb(){
    alert("Successfully Submit")
  }
  imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
