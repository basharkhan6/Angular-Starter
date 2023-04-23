import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private messageService: MessageService) { }

  public success(summary?: string, details?: string): void {
    this.messageService.add({severity:'success', summary: summary, detail: details});
  }

  public info(summary?: string, details?: string): void {
    this.messageService.add({severity:'info', summary: summary, detail: details});
  }

  public warn(summary?: string, details?: string): void {
    this.messageService.add({severity:'warn', summary: summary, detail: details});
  }

  public error(summary?: string, details?: string): void {
    this.messageService.add({severity:'error', summary: summary, detail: details});
  }

  public sticky(summary?: string, details?: string): void {
    this.messageService.add({severity:'info', summary: summary, detail: details, sticky: true});
  }

  public clear(): void {
    this.messageService.clear();  }

}
