import { Component } from '@angular/core';
import { ReproService } from './repro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repro-app';

  constructor(private service: ReproService) {
  }

  postFile(e: Event) {
    const fileInput = e.target as HTMLInputElement;
    const file = fileInput.files[0];
    this.service.postFileWithProgress(file).subscribe(x => {
      console.log(x);
    });
  }
}
