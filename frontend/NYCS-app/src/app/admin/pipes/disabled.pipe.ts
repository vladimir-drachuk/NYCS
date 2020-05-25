import { Pipe, PipeTransform } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Pipe({
  name: 'disabled'
})
export class DisabledPipe implements PipeTransform {

  transform(matches: Match[], criteria: string): boolean {
    return !!(matches.filter((match: Match) => {
              const tourneyStatusArray = match.tourneyStatus.split(' ')
              const lastWord = tourneyStatusArray[tourneyStatusArray.length - 1];
              return !match.isComplete && lastWord === criteria;
            }).length) 
  };
}
