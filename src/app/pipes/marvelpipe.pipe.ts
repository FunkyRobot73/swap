import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvelpipe'
})
export class MarvelpipePipe implements PipeTransform {

  transform(comics: any[], publisher: string) {
    return comics.filter(comic => comic.publisher == publisher);
  }

}
