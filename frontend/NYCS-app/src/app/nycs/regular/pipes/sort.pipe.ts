import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(teamsArray) {
    return teamsArray.sort((a, b) => b.score - a.score);
  }

}
