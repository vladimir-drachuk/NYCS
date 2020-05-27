import { Pipe, PipeTransform } from '@angular/core';
import { Team } from 'src/app/shared/models/team.model';

@Pipe({
  name: 'sortslots'
})
export class SortslotsPipe implements PipeTransform {

  transform(teams: Team[]): Team[] {
    return teams.sort((a, b) => b.stats.totalPlace - a.stats.totalPlace).reverse();
  }

}
