import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabTaskListComponent } from './features/taskList/task-list.component';
import { LabTaskComponent } from './features/task/task.component';
import { LabTaskGuard } from './core/guards/task.guard';
import { LabWrongTaskComponent } from './features/wrongTask/wrong-task.component';

export const LabRoutes = {
  initial: '',
  task: 'task/:id',
  wrongTask: 'wrong-task'
}

const routes: Routes = [{
  path: LabRoutes.initial,
  component: LabTaskListComponent
}, {
  path: LabRoutes.task,
  component: LabTaskComponent,
  canActivate: [LabTaskGuard]
}, {
  path: LabRoutes.wrongTask,
  component: LabWrongTaskComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LabAppRoutingModule {}
