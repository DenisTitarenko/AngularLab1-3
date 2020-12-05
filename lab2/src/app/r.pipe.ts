import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'r',
  pure: false
})
export class RPipe implements PipeTransform {
  transform(value: any): string {
    return value.split('').reverse().join('');
  }
}
