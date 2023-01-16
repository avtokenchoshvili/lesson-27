import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dot'
})
export class DotPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value)
    return `${value}...`;
  }

}
