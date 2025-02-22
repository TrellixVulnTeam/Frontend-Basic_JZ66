import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingService: LoggingService,  private accountService: AccountService){}

  onSetTo(status: string) {
    this.accountService.upsateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }

}