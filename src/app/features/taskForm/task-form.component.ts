import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { LabTaskFormService } from "./task-form.service";
import { LAB_OVERLAY_PORTAL_DATA, LabOverlayPortalRef } from "src/app/core/services/overlay-portal.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'lab-task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LabTaskFormService]
})
export class LabTaskFormComponent {

  readonly form = this.buildForm();

  constructor(
    @Inject(LAB_OVERLAY_PORTAL_DATA) private data: any,
    private overlayPortalRef: LabOverlayPortalRef,
    private formBuilder: FormBuilder,
    private service: LabTaskFormService
  ) {}

  cancel() {
    this.overlayPortalRef.close();
  }

  submit() {
    const formData = this.form.value;
    this.overlayPortalRef.close({
      id: this.data?.id,
      title: formData.title,
      description: formData.description,
      tsExpires: Date.parse(formData.expires)
    });
  }

  private buildForm() {
    const controls = {
      title: this.formBuilder.control(null),
      description: this.formBuilder.control(null),
      expires: this.formBuilder.control(null),
    }
    if (this.data) {
      controls.title.setValue(this.data.title);
      controls.description.setValue(this.data.description);
      controls.expires.setValue(new Date(this.data.tsExpires).toISOString());
    }
    return this.formBuilder.group(controls);
  }

}
