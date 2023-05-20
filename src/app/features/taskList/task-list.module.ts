import { NgModule } from "@angular/core";
import { LabTaskListComponent } from "./task-list.component";
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { LabCoreModule } from "src/app/core/core.module";
import { CommonModule } from "@angular/common";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LabTaskListComponent],
  imports: [

    CommonModule,
    RouterModule,
    LabCoreModule,

    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    DragDropModule,

  ],
  exports: [LabTaskListComponent]
})
export class LabTaskListModule {}
