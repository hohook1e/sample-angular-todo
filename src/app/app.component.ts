import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { LabAppService } from './app.service';

@Component({
  selector: 'lab-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LabAppService],
  encapsulation: ViewEncapsulation.None
})
export class LabAppComponent {

  constructor(
    private service: LabAppService
  ) {}

}
