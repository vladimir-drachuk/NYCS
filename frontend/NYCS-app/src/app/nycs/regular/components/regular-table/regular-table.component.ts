import { Component, Input } from '@angular/core';
import { Team, Stats } from '../../../../shared/models/team.model'

@Component({
  selector: 'app-regular-table',
  templateUrl: './regular-table.component.html',
  styleUrls: ['./regular-table.component.scss']
})
export class RegularTableComponent {

  displayedColumns: string[] = ['position', 'team', 'half', 'games', 'rounds', 'plus-minus', 'win-lost', 'pct1', 'halfstat', 'pct2', 'last-4', 'points'];
  @Input() teams: Team[];

  public showRounds(stats: Stats): string {
    const { roundLost, roundWin } = stats;
    return `${roundWin}-${roundLost}`
  }

  public showPlusMinus(stats: Stats): number {
    const { roundLost, roundWin } = stats;
    return roundWin - roundLost;
  }

  public showNycsStat(stats: Stats): string {
    const { wins, winsOT, loses, losesOT } = stats;
    return `${wins}-${winsOT}-${losesOT}-${loses}`;
  }

  public showHalfStat(stats: Stats): string {
    const { winsHalf, losesHalf } = stats;
    return `${winsHalf}-${losesHalf}`;
  }

  public showPercent(percent: number): string {
    let result;
    switch(percent) {
      case null:
        result = '-';
        break;
      case 0:
        result = '.000';
        break;
      case 1000:
        result = '1.000'
        break;
      default:
        result = `.${percent}` 
    }
    return result;
  }

  public showWinLostString(string: string): string {
    let showedString;
    switch (string.length) {
      case 0:
        showedString = '-';
      break;
      case 1:
        showedString = `${string[string.length - 1]}`;
      break;
      case 2:
        showedString = `${string[string.length - 2]}-${string[string.length - 1]}`;
      break;
      case 3:
        showedString = `${string[string.length - 3]}-${string[string.length - 2]}-${string[string.length - 1]}`;
      break;
      default:
        showedString = `${string[string.length - 4]}-${string[string.length - 3]}-${string[string.length - 2]}-${string[string.length - 1]}`
      break;
    }
    return showedString;
  }
}
