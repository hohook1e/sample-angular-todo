import { NgModule } from "@angular/core";
import { LabTaskModule } from "./task/task.module";
import { LabTaskListModule } from "./taskList/task-list.module";
import { LabTaskFormModule } from "./taskForm/task-form.module";

@NgModule({
  imports: [
    LabTaskModule,
    LabTaskFormModule,
    LabTaskListModule,
  ],
  exports: [
    LabTaskModule,
    LabTaskFormModule,
    LabTaskListModule,
  ]
})
export class LabFeaturesModule {}
