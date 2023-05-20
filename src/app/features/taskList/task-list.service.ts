import { Inject, Injectable, OnDestroy } from "@angular/core";
import { LabTask } from "../../core/models/task";
import { BehaviorSubject, Subject } from "rxjs";
import { LabOverlayPortalService } from "src/app/core/services/overlay-portal.service";
import { LabTaskFormComponent } from "../taskForm/task-form.component";
import { filter, takeUntil } from "rxjs/operators";
import { isDefined } from "@angular/compiler/src/util";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { LAB_TASKS } from "src/app/core/models/tasks";

@Injectable()
export class LabTaskListService implements OnDestroy {

  readonly tasks$: BehaviorSubject<LabTask[]> = new BehaviorSubject(this.tasks);

  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    @Inject(LAB_TASKS) private tasks: LabTask[],
    private overlayPortalService: LabOverlayPortalService
  ) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  addTask(title: string, description: string, tsExpires: number) {
    this.tasks.push(new LabTask(title, description, tsExpires));
    this.tasks$.next(this.tasks);
  }

  updateTask(id: string, title: string, description: string, tsExpires: number) {
    const updatedIdx = this.tasks.findIndex(t => t.id === id);
    this.tasks[updatedIdx].patch(title, description, tsExpires);
    this.tasks$.next(this.tasks);
  }

  openTaskWizard(task?: LabTask) {

    const overlayPortalRef = this.overlayPortalService.open(LabTaskFormComponent, {
      overlayConfig: {
        panelClass: this.overlayPortalService.panelDefault,
        disposeOnNavigation: true,
        scrollStrategy: this.overlayPortalService.blockedScroll,
        positionStrategy: this.overlayPortalService.centeredPosition,
        hasBackdrop: true,
        backdropClass: this.overlayPortalService.tintedBackdrop
      },
      data: task
    })

    overlayPortalRef.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter(isDefined)
    )
      .subscribe(({ id, title, description, tsExpires }) => {
        if (id) {
          this.updateTask(id, title, description, tsExpires);
        } else {
          this.addTask(title, description, tsExpires);
        }
      });

    overlayPortalRef.backdropClick().pipe(takeUntil(this.destroy$))
      .subscribe(() => overlayPortalRef.close());

  }

  reorder(fromIndex: number, toIndex: number) {
    moveItemInArray(this.tasks, fromIndex, toIndex);
    this.tasks$.next(this.tasks);
  }

  removeTask(taskId: string) {
    const removedIdx = this.tasks.findIndex(({ id }) => id === taskId);
    this.tasks.splice(removedIdx, 1);
    this.tasks$.next(this.tasks);
  }

}
