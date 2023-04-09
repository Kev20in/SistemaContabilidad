import { Component, OnInit } from '@angular/core';
import { MenuOption } from '@shared/enums/menu.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  public userInitials: string;
  public isSignOutBoxActive = false;
  public currentMenuOption: MenuOption;
  public openMenu = false;

  ngOnInit(): void {
    this.userInitials = 'AD';
    this.currentMenuOption = 1
  }

  public moveTo(menuOption:number):void{
    this.currentMenuOption = menuOption;
  }
  public openMenus(){
    this.openMenu = !this.openMenu
  }

  public setSignOutBox(): void {
    this.isSignOutBoxActive = !this.isSignOutBoxActive;
  }

}
