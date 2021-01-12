import { Component } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public user: User = JSON.parse(localStorage.getItem('user'));
}
