import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/shared/models/team.model';

@Component({
  selector: 'app-place-slot',
  templateUrl: './place-slot.component.html',
  styleUrls: ['./place-slot.component.scss']
})
export class PlaceSlotComponent implements OnInit {

  @Input() team: Team;
  @Input() place: number;

  constructor() { }

  ngOnInit(): void {
  }

}
