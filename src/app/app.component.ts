import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
/*
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
  this.items = af.database.list('items');
  }
*/