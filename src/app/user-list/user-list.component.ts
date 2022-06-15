import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface IUserInfo {
  task: string;
  check: boolean;
  done: string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public inputAdd!: string;
  public arrElem: Array<IUserInfo> = [];
  public inputSave!: string;
  public editIndex!: number;
  public hideBox: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  add(): void {
    if (this.inputAdd) {
      const obj: IUserInfo = {
        task: this.inputAdd,
        check: false,
        done: 'IN PROGRES',
      };
      this.arrElem.push(obj);
      this.inputAdd = '';
    } else {
      alert('Write task');
      this.inputAdd = '';
    }
  }
  getInfo(event: boolean) {
    this.hideBox = event;
  }
}
