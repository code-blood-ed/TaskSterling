import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdminComponent,StudentComponent,StaffComponent,LoginpageComponent,FormsModule,RouterOutlet,HeaderComponent,FooterComponent,RegistrationpageComponent,RouterModule,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentManagementSystem';
  imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
}
