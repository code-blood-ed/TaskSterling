import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
val2:string="ak@gmail.com"
func2(){
  alert("Sent Successfully")
}
}
