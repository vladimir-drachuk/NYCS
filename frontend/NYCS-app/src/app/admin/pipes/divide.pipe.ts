import { Pipe, PipeTransform } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Pipe({
  name: 'divide'
})
export class DividePipe implements PipeTransform {

  transform(matches: Match[], tourneyStatus: string, stage?:string, half?: string): Match[] {
    let result = matches.filter((match: Match) => 
    match.tourneyStatus.split(' ')[0] === tourneyStatus);
    if (stage) {
      result = result.filter((match: Match) => 
        match.tourneyStatus.split(' ')[1] === stage);
    }
    if (half) {
      result = result.filter((match: Match) => 
        match.half === half);
    }
    return result;
  }

}
