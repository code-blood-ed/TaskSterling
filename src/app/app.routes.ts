import { Routes, RouterModule } from '@angular/router';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { HomeComponent } from './home/home.component';
import { TrackappComponent } from './trackapp/trackapp.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { AboutdeptComponent } from './staff/aboutdept/aboutdept.component';
import { AttendanceComponent } from './staff/attendance/attendance.component';
import { MarksComponent } from './staff/marks/marks.component';
import { TopperComponent } from './staff/topper/topper.component';
import { StudentabtComponent } from './student/studentabt/studentabt.component';
import { StudtopperComponent } from './student/studtopper/studtopper.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },

    {
        path:'registrationpage',
        component:RegistrationpageComponent,
        
    },

    {
        path:'track',
        component:TrackappComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'gallery',
        component:GalleryComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'login',
        component:LoginpageComponent
    },
    {
        path:'staff',
        component:StaffComponent,
        children:[
            {
                path:'aboutdep',
                component:AboutdeptComponent
            },
            {
                path:'attendance',
                component:AttendanceComponent
            },
            {   
                path:'marksentry',
                component:MarksComponent
            },
            {
                path:'topper',
                component:TopperComponent
            }
        ]
    },
    {
        path:'student',
        component:StudentComponent,
        children:[
            {
                path:'studentabt',
                component:StudentabtComponent
            },
            {
                path:'studtopper',
                component:StudtopperComponent
            }
        ]
    },
    {
        path:'admin',
        component:AdminComponent
    }

    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }