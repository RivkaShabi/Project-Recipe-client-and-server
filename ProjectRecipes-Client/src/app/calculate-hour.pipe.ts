import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateHour'
})
export class CalculateHourPipe implements PipeTransform {

  transform(value: number): String {
    let x = 0;
    if (value < 60)
      return value + " דקות";
    else if (value < 120) {
      x = value - 60;
      return ( " שעה ו "+ x + " דקות ");
    }
    if (value < 180) {
      x = value - 120;
      return (" שעתיים ו " + x +" דקות " );
    }
    else {

      x = value / 60;
      x=Math.floor(x);
      let y = value-(x * 60);
      return (  x+ "  שעות ו "+ y +" דקות ");
    }


  }

}
