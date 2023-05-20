import { NgModule } from "@angular/core";
import { LabTaskComponent } from "./task.component";
import { MatCardModule } from '@angular/material/card';
import { LabCoreModule } from "src/app/core/core.module";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [LabTaskComponent],
  imports: [

    CommonModule,
    LabCoreModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [LabTaskComponent]
})
export class LabTaskModule {}
