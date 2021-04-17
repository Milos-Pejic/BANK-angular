import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 1:
        return 'Approved'
        break;
      case 2:
        return 'Waiting'
        break;
      case 3:
        return 'Rejected'
        break;

    }
    return value
    

  }





}
