import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import {  RouterModule } from '@angular/router';
import { StudentabtComponent } from './studentabt/studentabt.component';
import { StudtopperComponent } from './studtopper/studtopper.component';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, RouterModule,StudentabtComponent,StudtopperComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
