import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter();

  constructor() { }

  closeModal() {
    this.closeModalEvent.emit();
  }

  ngOnInit(): void {
  }

}
