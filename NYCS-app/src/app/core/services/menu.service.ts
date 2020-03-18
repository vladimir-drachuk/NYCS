import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable()
export class MenuService {

  public menuItems: MenuItem[] = [
    {
      title: 'Regular',
      path: 'regular'
    },
    {
      title: 'Playoff',
      path: 'playoff'
    },
  ];

  constructor() { }
}
