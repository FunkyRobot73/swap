import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bronzepipe'
})
export class BronzePipe implements PipeTransform {

  transform(comics: any[], year: string) {
    return comics.filter(comic => parseInt(comic.year) <= 1999 && parseInt(comic.year) <= 1980);
  }

}
