import { ComponentType, Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, InjectionToken, Injector } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LabOverlayPortalService {

  readonly panelDefault = [
    'lab-app-bg',
    'lab-panel',
    'lab-panel-rounded',
    'cdk-overlay-pane',
    'mat-elevation-z6'
  ];

  readonly blockedScroll = this.overlay.scrollStrategies.block();

  readonly centeredPosition = this.overlay.position()
    .global()
    .centerHorizontally()
    .centerVertically();

  readonly tintedBackdrop = [
    'cdk-overlay-backdrop',
    'cdk-overlay-dark-backdrop',
    'cdk-overlay-backdrop-showing'
  ];

  constructor(private injector: Injector, private overlay: Overlay) {}

  open<T>(component: ComponentType<T>, config: LabOverlayPortalConfig): LabOverlayPortalRef {
    const overlayRef = this.overlay.create(config.overlayConfig);
    const overlayPortalRef = new LabOverlayPortalRef(overlayRef);
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: LabOverlayPortalRef, useValue: overlayPortalRef },
        { provide: LAB_OVERLAY_PORTAL_DATA, useValue: config?.data }
      ]
    });
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);
    return overlayPortalRef;
  }

}

export class LabOverlayPortalRef {

  private afterClosedSubject = new Subject<any>();

  constructor(private overlayRef: OverlayRef) {}

  backdropClick(): Observable<MouseEvent> {
    return this.overlayRef.backdropClick();
  }

  close(result?: any) {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }

  afterClosed(): Observable<any> {
    return this.afterClosedSubject.asObservable();
  }

}

export const LAB_OVERLAY_PORTAL_DATA = new InjectionToken<any>('LAB_OVERLAY_PORTAL_DATA');

export interface LabOverlayPortalConfig {
  overlayConfig: OverlayConfig,
  data?: any
}
