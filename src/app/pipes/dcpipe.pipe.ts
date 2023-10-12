import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dcpipe'
})
export class DcpipePipe implements PipeTransform {

  transform(comics: any[], publisher: string) {
    return comics.filter(comic => comic.publisher === publisher);
  }

}
