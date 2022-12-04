import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  name: string = 'Fran';
  user = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }


  onSubmit( form: NgForm ) {
    console.log('Submit');
    console.log(this.user);
    console.log(form);
    
    
  }
}
