import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() public title: string = '';
  @Input() public modalActiveWindow: string;
  @Input() public modalWidth: string;
  @Input() public isEditType = false;
  @Output() public closeEvent = new EventEmitter();
  public isWindowActive = true;

  public closeWindow(): void {
    this.closeEvent.emit('');
  }
}
