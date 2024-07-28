import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutdeptComponent } from './aboutdept/aboutdept.component';
import { RouterLink } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { TopperComponent } from './topper/topper.component';
import {  RouterModule } from '@angular/router';


@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink,AboutdeptComponent,AttendanceComponent,MarksComponent,TopperComponent, RouterModule ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
  
}
