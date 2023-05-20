import { NgModule } from "@angular/core";
import { LabTaskFormComponent } from "./task-form.component";
import { CommonModule } from "@angular/common";
import { LabCoreModule } from "src/app/core/core.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [LabTaskFormComponent],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    LabCoreModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule

  ],
  exports: [LabTaskFormComponent],
})
export class LabTaskFormModule {}
