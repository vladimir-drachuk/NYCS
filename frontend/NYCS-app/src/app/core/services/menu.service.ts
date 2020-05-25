import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable()
export class MenuService {

  public menuItems: MenuItem[] = [
    {
      title: 'Standings',
      path: 'standings'
    },
    {
      title: 'Playoff',
      path: 'playoff'
    },
    {
      title: 'Schedule',
      path: 'schedule'
    },
    {
      title: 'Results',
      path: 'results'
    }
  ];

  constructor() { }
}
