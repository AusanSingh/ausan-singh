import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  totalExp = '';
  ageToday = '';
  constructor() { }

  ngOnInit() {
    let today = new Date();
    let expDiff = this.dateDiff('2011-09-15', today);
    this.totalExp= `${expDiff.years}.${expDiff.months}`;
    
    let dobDiff = this.dateDiff('1991-07-10', today);
    this.ageToday= `${dobDiff.years}`;
  }

  dateDiff(startingDate: any, endingDate: any) {
    var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
      endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
    }
    var endDate = new Date(endingDate);
    if (startDate > endDate) {
      var swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    var startYear = startDate.getFullYear();
    var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    var dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }

    return {'years':yearDiff, 'months':monthDiff,'days':dayDiff};
  }

}
