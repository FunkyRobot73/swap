import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'silver'
})
export class SilverPipe implements PipeTransform {

  transform(comics: any[], year: string) {
    return comics.filter(comic => parseInt(comic.year) <= 1979);
  }
}
