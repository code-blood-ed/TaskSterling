import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-studtopper',
  standalone: true,
  imports: [RouterLink,FooterComponent],
  templateUrl: './studtopper.component.html',
  styleUrl: './studtopper.component.css'
})
export class StudtopperComponent {

}
