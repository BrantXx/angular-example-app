import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'This is a test';
  paragraph = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Proin lectus lorem, imperdiet ac efficitur eu, porta non urna.
      Vestibulum metus velit, vehicula sed felis vel, consequat gravida ipsum.
      Suspendisse potenti. Praesent id ex nisi. In blandit neque ac massa pretium, et lobortis nisl pulvinar.
      Etiam semper nisi ac ex feugiat venenatis. Aenean iaculis vitae augue nec gravida.
  `;
}
