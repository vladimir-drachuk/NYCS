import { Pipe, PipeTransform } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Pipe({
  name: 'divide'
})
export class DividePipe implements PipeTransform {

  transform(matches: Match[], criteria: string): Match[] {
    return matches.filter((match: Match) => match.tourneyStatus.split(' ')[0] === criteria);
  }

}
