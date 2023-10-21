import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goldenpipe'
})
export class GoldenPipe implements PipeTransform {

  transform(comics: any[], year: string) {
    return comics.filter(comic => parseInt(comic.year) <= 1959);
  }

}
