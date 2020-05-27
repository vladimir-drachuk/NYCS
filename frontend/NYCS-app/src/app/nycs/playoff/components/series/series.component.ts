import { Component, OnInit, Input } from '@angular/core';
import { Series } from 'src/app/shared/models/series.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  @Input() public series: Series;

  constructor() { }

  ngOnInit(): void {
  }

}
