import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../../models/menu-item.model';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  public menuList: MenuItem[];

  constructor(private menu: MenuService) {
    this.menuList = this.menu.menuItems;
  }

  ngOnInit(): void {
  }

}
