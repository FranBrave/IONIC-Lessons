import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  items: any[] = []

  constructor() { }

  ngOnInit() {
  }


  handleRefresh(event: any) {
    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 1500);
  };
}
