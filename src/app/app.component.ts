import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
//   template:`
//   <div>

//   <ul class="nav nav-tabs" style="height:50px">
//     <li routerLinkActive="active"><a [routerLink]="['/app-home']">HOME</a></li>
//     <li routerLinkActive="active"><a [routerLink]="['/app-fruit']">FRUITS</a></li>
//     <li routerLinkActive="active"><a [routerLink]="['/app-vegetable']">VEGETABLES</a></li>
//     <li><button [routerLink]="['/app-login-form']" type="button" class="btn btn-outline-warning" style="margin-left: 1350px;height: 50px;width: 150px;color: black;font-weight: bold;">LogOut</button></li>
//   </ul>
//   <router-outlet></router-outlet>
// </div>`
})
export class AppComponent {
  title = 'Date Class';
}
