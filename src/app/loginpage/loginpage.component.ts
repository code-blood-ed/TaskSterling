import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StaffComponent } from '../staff/staff.component';
import { StudentComponent } from '../student/student.component';
import { AdminComponent } from '../admin/admin.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [AdminComponent,StaffComponent ,StudentComponent,HeaderComponent,RouterLink, FooterComponent,FormsModule,AboutComponent],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
imgSrc = 'https://www.freepnglogos.com/uploads/a-logo-5.png'
username: string = '';

constructor(private router: Router) {}

login() {
 
  this.router.navigate(['/student']);
}

loginAsStaff() {

  this.router.navigate(['/staff']);
}

loginAsAdmin() {

  this.router.navigate(['/admin']);
}

}
