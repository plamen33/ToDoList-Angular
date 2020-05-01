import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import {LoggingService} from "./logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private loggingService: LoggingService) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog("Hello says app.component.ts ngOnInit");
  }


  // OLD code:
  // title = 'todolist-angular';
  // we store which feature it should be displayed, 'item' string should match the string used in header.component.html
  // loadedFeature = 'item';
  //
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
