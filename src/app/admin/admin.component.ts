import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {  RouterLink } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
