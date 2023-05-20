import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { LabAppRoutingModule } from './app-routing.module';
import { LabAppComponent } from './app.component';
import { LabFeaturesModule } from './features/features.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { LabAppHeaderComponent } from './features/appHeader/app-header.component';
import { LAB_TASKS, tasks } from './core/models/tasks';
import { LabWrongTaskComponent } from './features/wrongTask/wrong-task.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    LabAppComponent,
    LabAppHeaderComponent,
    LabWrongTaskComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    LabAppRoutingModule,

    LabFeaturesModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    {provide: LAB_TASKS, useValue: tasks}
  ],
  bootstrap: [LabAppComponent]
})
export class LabAppModule {}
