import { NgModule } from "@angular/core";
import { LabLoadingPipe } from "./pipes/loader.pipe";

@NgModule({
  declarations: [LabLoadingPipe],
  exports: [LabLoadingPipe]
})
export class LabCoreModule {}
