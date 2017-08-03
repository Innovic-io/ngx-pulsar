import {
  Component, ChangeDetectionStrategy, Input, OnInit
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngx-pulsar',
  templateUrl: './pulsar.component.html',
  styleUrls: ['./pulsar.component.css']
})
export class PulsarComponent implements OnInit {

  @Input() text: string;
  @Input() title = 'Title placeholder...';
  @Input() size = 18;
  modalOpen = false;

  constructor() {}

  ngOnInit() {}

  open() {
    this.modalOpen = true;
  }

  close() {
    this.modalOpen = false;
  }
}
