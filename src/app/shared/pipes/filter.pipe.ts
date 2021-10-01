import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: string, prop: string): any[] {

    if (!items) return [];

    if (!value) return items;

    return items.filter((data: any) => {
      if (data?.[prop]) {
        return data[prop]?.toLowerCase().includes(value.toLowerCase());
      }

      return false;
    });
  }

}
