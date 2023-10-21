import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modern'
})
export class ModernPipe implements PipeTransform {

  transform(comics: any[], year: string) {
    return comics.filter(comic => parseInt(comic.year) >= 2000);
  }

}
