import { Injectable } from '@angular/core';

//@Injectable({ providedIn: 'root' })  // we can use  providers: [LoggingService]  in app.module.ts it has same effect as using //@Injectable({ providedIn: 'root' })  in logging.service.ts
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    console.log(message);
    console.log(this.lastlog);
    this.lastlog = message;
  }
}
