import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Match } from '../../../shared/models/match.model';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-admin-match',
  templateUrl: './admin-match.component.html',
  styleUrls: ['./admin-match.component.scss']
})
export class AdminMatchComponent implements OnInit {

  @Input() match: Match;
  @ViewChild('edit', { static: false }) public editButton: MatButton;
  @ViewChild('clear', { static: false }) public clearButton: MatButton; 
  @ViewChild('delete', { static: false }) public deleteButton: MatButton; 
  public overTime: boolean;

  constructor() { }

  ngOnInit(): void {
    this.overTime = this.match.isOT || this.match.isKR;
  }

  public showOT(): string {
    let result = '';
    if (this.overTime) result = (this.match.isKR) ? 'KR' : 'OT';
    return result
  }

  public mouseOver(event): void {
    const { target } = event
    const form = target.closest('.form');
    form.classList.add('focus');
    this.editButton._elementRef.nativeElement.classList.remove('hide');
    this.clearButton._elementRef.nativeElement.classList.remove('hide');
    this.deleteButton._elementRef.nativeElement.classList.remove('hide');
  }

  public mouseOut(event): void {
    const { target } = event
    const form = target.closest('.form');
    form.classList.remove('focus');
    this.editButton._elementRef.nativeElement.classList.add('hide');
    this.clearButton._elementRef.nativeElement.classList.add('hide');
    this.deleteButton._elementRef.nativeElement.classList.add('hide');
  }
  
  public getEdit(): void {
    console.log('edit');
  }

  public getClear(): void {
    console.log('clear');
  }

  public getDelete(): void {
    console.log('delete');
  }

}
