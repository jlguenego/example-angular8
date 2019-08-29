import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    const minute = ('' + Math.floor(value / 60)).padStart(2, '0');
    const second = ('' + Math.floor(value % 60)).padStart(2, '0');
    return `${minute}:${second}`;
  }

}
