import { Component, ChangeDetectionStrategy } from "@angular/core";
import { LabAppHeaderService } from "./app-header.service";
import { Observable } from "rxjs";

@Component({
  selector: 'lab-app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LabAppHeaderService]
})
export class LabAppHeaderComponent {

  readonly icon$: Observable<string>;

  constructor(
    private service: LabAppHeaderService
  ) {
    this.icon$ = service.icon$;
  }

  toggleTheme() {
    this.service.toggleTheme();
  }

}
