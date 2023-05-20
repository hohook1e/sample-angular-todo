import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LabTaskListService } from "./task-list.service";
import { LabTask } from "../../core/models/task";
import { BehaviorSubject } from "rxjs";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'lab-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LabTaskListService]
})
export class LabTaskListComponent {

  readonly tasks$: BehaviorSubject<LabTask[]>;

  constructor(
    private service: LabTaskListService
  ) {
    this.tasks$ = service.tasks$;
  }

  close(task: LabTask) {
    this.service.removeTask(task.id);
  }

  edit(task: LabTask) {
    this.service.openTaskWizard(task);
  }

  drop(event: CdkDragDrop<any>) {
    this.service.reorder(event.previousIndex, event.currentIndex);
  }

  new() {
    this.service.openTaskWizard();
  }

  identify(index: number, item: LabTask) {
    return item.id;
  }

}
