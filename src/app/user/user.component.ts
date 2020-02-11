import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../services/core/auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [AuthService]
})
export class UserComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login() {
    let token = this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log(token)
  }
  logout() {
    this.auth.signOut();
  }

}
