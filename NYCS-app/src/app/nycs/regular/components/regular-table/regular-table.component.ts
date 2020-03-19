import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regular-table',
  templateUrl: './regular-table.component.html',
  styleUrls: ['./regular-table.component.scss']
})
export class RegularTableComponent {

  displayedColumns: string[] = ['position', 'team', 'half', 'result'];
  @Input() teams;
}
