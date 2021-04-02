import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likes'
})
export class LikesPipe implements PipeTransform {

  transform(value: any): any {

    if (value > 10 && value < 15) { return `${value} лайков`; }

    switch (value % 10) {
      case 1: {
        return `${value} лайк`;
      }
      case 2:
      case 3:
      case 4: {
        return `${value} лайка`;
      }
      default: {
        return `${value} лайков`;
      }
    }
  }
}
