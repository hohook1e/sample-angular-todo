import { Injectable, Inject, RendererFactory2, Renderer2, OnDestroy } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Injectable()
export class LabAppService implements OnDestroy {

  readonly themeLight = 'lab-app-light-theme';
  readonly themeDark = 'lab-app-dark-theme';

  readonly isThemeDark$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {

    this.renderer = rendererFactory.createRenderer(null, null);

    this.isThemeDark$.pipe(takeUntil(this.destroy$))
      .subscribe(isThemeDark => this.applyTheme(isThemeDark));

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private applyTheme(isThemeDark: boolean) {
    this.renderer.removeClass(this.document.body, isThemeDark ? this.themeLight : this.themeDark);
    this.renderer.addClass(this.document.body, isThemeDark ? this.themeDark : this.themeLight);
  }

}
