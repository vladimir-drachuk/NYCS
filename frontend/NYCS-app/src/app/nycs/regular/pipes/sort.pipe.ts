import { Pipe, PipeTransform } from '@angular/core';

import { Team } from '../../../shared/models/team.model'; 

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(teamsArray: Team[]): Team[] {
    return teamsArray.sort((a, b) => b.stats.score - a.stats.score);
  }

}
