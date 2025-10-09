import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  id = '22B030344';
  name = 'Bereket Yergali';
  university = 'KBTU';
  email = 'b_yergali@kbtu.kz';
  practice = 2;

  travellerImg = 'assets/images/about/traveller.png';
  isButtonDisabled = false;
  likes = 0;

  showMessage = false;

  inputName = '';
  inputEmail = '';
  subscribed = false;

  addLike() {
    this.likes++;
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  subscribe() {
    if (this.inputEmail.trim() !== '') {
      this.subscribed = true;
    }
  }
}
