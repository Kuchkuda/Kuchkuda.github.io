import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface IUserInfo {
  task: string;
  check: boolean;
  done: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() createTable!: Array<IUserInfo>;
  @Output() fromChildHideBox = new EventEmitter();
  public editStatus: boolean = false;
  public checkDone: boolean = false;
  public inputSave!: string;
  public editIndex!: number;
  public hideBox: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  edit(index: number): void {
    console.log(this.createTable[index].check);
    
    
    this.inputSave = this.createTable[index].task;
    this.editIndex = index;
    this.fromChildHideBox.emit((this.hideBox = true));
    this.editStatus = true;
    this.createTable[index].check=false;
    this.createTable[index].done = 'IN PROGRES';
  }
  delete(index: number): void {
      this.createTable.splice(index, 1);
  }
  checkTask(index: number): void {
    this.createTable[index].check = !this.createTable[index].check;
    if (this.createTable[index].check === true) {
      this.checkDone = true;
      this.createTable[index].done = 'DONE';
    } else {
      this.checkDone = false;
      this.createTable[index].done = 'IN PROGRES';
    }
  }
  save(): void {
    this.createTable[this.editIndex].task = this.inputSave;
    this.inputSave = '';
    this.hideBox = false;
    this.editStatus = false;
  }
}
