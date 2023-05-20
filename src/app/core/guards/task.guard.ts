import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LabRoutes } from "src/app/app-routing.module";
import { LAB_TASKS } from "../models/tasks";
import { LabTask } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class LabTaskGuard implements CanActivate {

  constructor(
    @Inject(LAB_TASKS) private tasks: LabTask[],
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.isKnownTask(route, this.tasks) ? true : this.denyActivate();
  }

  denyActivate(): false {
    this.router.navigate([LabRoutes.wrongTask]);
    return false;
  }

  isKnownTask(route: ActivatedRouteSnapshot, tasks: LabTask[]) {
    const id = route.paramMap.get('id');
    return tasks.some(t => t.id === id);
  }

}
