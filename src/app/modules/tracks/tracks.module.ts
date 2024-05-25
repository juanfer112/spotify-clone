import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TracksPageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TracksModule { }
