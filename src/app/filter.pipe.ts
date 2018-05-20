import { Pipe, PipeTransform } from '@angular/core';

// making a pipe pure false may casue performance degradation ads it will invoke
// pipe if any changes made on page
@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
      if (value.length === 0 || filterString === '')
      {
          return value;
      }

      const resultArray = [];
      for (const item of value) {
          if (item[propName] === filterString) {
              resultArray.push(item);
          }
      }
      return resultArray;
  }

}
