import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
    this.users = userService.getAll();
  }

  ngOnInit(): void {
  }

}
