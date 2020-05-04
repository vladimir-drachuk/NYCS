import { Component, Input } from '@angular/core';
import { Team, Stats } from '../../../../shared/models/team.model'

@Component({
  selector: 'app-regular-table',
  templateUrl: './regular-table.component.html',
  styleUrls: ['./regular-table.component.scss']
})
export class RegularTableComponent {

  displayedColumns: string[] = ['position', 'team', 'half', 'games', 'win-lost', 'rounds', 'plus-minus', 'last-4', 'points'];
  @Input() teams: Team[];

  public showGames(stats: Stats): number {
    const { wins, winsOT, loses, losesOT } = stats;
    return wins + winsOT + loses + losesOT;
  }

  public showRounds(stats: Stats): string {
    const { roundLost, roundWin } = stats;
    return `${roundWin}-${roundLost}`
  }

  public showPlusMinus(stats: Stats): number {
    const { roundLost, roundWin } = stats;
    return roundWin - roundLost;
  }

  public showWinLostStat(stats: Stats): string {
    const { wins, winsOT, loses, losesOT } = stats;
    return `${wins}-${winsOT}-${losesOT}-${loses}`;
  }

  public showPoints(stats: Stats): number {
    const { wins, winsOT, losesOT } = stats;
    return wins * 3 + winsOT * 2 + losesOT;
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
        showedString = `${string[string.length - 2]}-${string[string.length - 3]}`;
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
