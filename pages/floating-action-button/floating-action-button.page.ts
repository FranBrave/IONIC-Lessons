import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.page.html',
  styleUrls: ['./floating-action-button.page.scss'],
})
export class FloatingActionButtonPage implements OnInit {



  data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
