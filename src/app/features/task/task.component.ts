import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LabTaskService } from "./task.service";
import { BehaviorSubject } from "rxjs";
import { LabTask } from "src/app/core/models/task";

@Component({
  selector: 'lab-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LabTaskService],
})
export class LabTaskComponent {

  readonly task$: BehaviorSubject<LabTask>;

  constructor(
    private service: LabTaskService,
  ) {
    this.task$ = service.task$;
  }

}
