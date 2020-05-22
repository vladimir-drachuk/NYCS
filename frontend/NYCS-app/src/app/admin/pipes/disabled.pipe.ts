import { Pipe, PipeTransform } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Pipe({
  name: 'disabled'
})
export class DisabledPipe implements PipeTransform {

  transform(matches: Match[], criteria: string): boolean {
    let result: boolean;
    switch (criteria) {
      case 'Regular':
        const check1 = matches.find((match: Match) => match.tourneyStatus !== criteria);
        // const check2 = matches.filter((match: Match) => !match.isComplete && match.tourneyStatus === criteria).length
        result = !check1;
        break;
      default:
        break;
    }
    return result;
  }
}
