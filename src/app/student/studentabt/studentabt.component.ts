import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-studentabt',
  standalone: true,
  imports: [RouterLink,FooterComponent],
  templateUrl: './studentabt.component.html',
  styleUrl: './studentabt.component.css'
})
export class StudentabtComponent {

}
