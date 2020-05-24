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
        result = !!(matches.filter((match: Match) => !match.isComplete && match.tourneyStatus === criteria).length)
        break;
      case 'Semi-Finals':
        result = !!(matches.filter((match: Match) => !match.isComplete && match.tourneyStatus === `Playoff ${criteria}`).length)
        break;
      case 'Half-Finals':
        result = !!(matches.filter((match: Match) => !match.isComplete && match.tourneyStatus === `Playoff ${criteria}`).length)
        break;
      default:
        break;
    }
    return result;
  }
}
