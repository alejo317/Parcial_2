import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinguinoComponent } from './pinguino.component';
import { PinguinoListComponent } from './pinguino-list/pinguino-list.component';
import { PinguinoDetailComponent } from './pinguino-detail/pinguino-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PinguinoListComponent],
  declarations: [PinguinoComponent, PinguinoListComponent, PinguinoDetailComponent]
})
export class PinguinoModule { }
