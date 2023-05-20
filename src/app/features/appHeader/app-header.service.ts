import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LabAppService } from "src/app/app.service";

@Injectable()
export class LabAppHeaderService {

  readonly iconLightTheme = 'light_mode';
  readonly iconDarkTheme = 'dark_mode';

  readonly icon$: Observable<string> = this.appService.isThemeDark$.pipe(
    map(isThemeDark => isThemeDark ? this.iconDarkTheme : this.iconLightTheme)
  );

  constructor(
    private appService: LabAppService
  ) {}

  toggleTheme() {
    const prev = this.appService.isThemeDark$.value;
    this.appService.isThemeDark$.next(!prev);
  }

}
