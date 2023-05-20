import { Inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { LabTask } from "src/app/core/models/task";
import { LAB_TASKS } from "src/app/core/models/tasks";

@Injectable()
export class LabTaskService {

  readonly task$: BehaviorSubject<LabTask>;

  private readonly id = this.route.snapshot.paramMap.get('id');

  constructor(
    @Inject(LAB_TASKS) tasks: LabTask[],
    private route: ActivatedRoute,
  ) {
    const taskIdx = tasks.findIndex(t => t.id === this.id);
    this.task$ = new BehaviorSubject(tasks[taskIdx]);
  }

}
