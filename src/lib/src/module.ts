import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PulsarComponent } from './component/pulsar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PulsarComponent
  ],
  providers: [],
  exports: [PulsarComponent]
})
export class NgxPulsarModule {

  /**
   * Initialize NgxPulsar
   */
  static forRoot() {
    return {
      ngModule: NgxPulsarModule
    };
  }
}
