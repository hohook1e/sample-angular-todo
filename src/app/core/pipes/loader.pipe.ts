import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, startWith, filter } from 'rxjs/operators';
import { isDefined } from '../utils/is-defined';

@Pipe({
  name: 'labLoader'
})
export class LabLoadingPipe implements PipeTransform {

  transform<T>(observable$: Observable<T>): Observable<LabLoaderResponse<T>> {
    return observable$.pipe(
      filter(isDefined),
      map(value => {
        if (isPrimitive(value)) return { loading: false, value }
        if (isArray(value)) return value.length ? { loading: false, value } : { loading: false, empty: true }
        return { loading: false, value }
      }),
      startWith({ loading: true }),
      catchError(error => of({ loading: false, error }))
    );
  }

}

type LabLoaderResponse<T> = {
  loading: boolean,
  value?: T,
  error?: any,
  empty?: boolean
}

function isArray(value: any): value is Array<any> {
  return Array.isArray(value);
}

function isPrimitive(value: any) {
  return typeof value !== 'object';
}
