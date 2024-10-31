import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) return '';
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }
}

//Pipe that makes the 1st letter Uppercase to be used in the filter-search dropdowns
