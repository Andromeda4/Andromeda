import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../services/salary.service';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.scss']
})
export class JokerComponent implements OnInit {
  public salaryTable1: any = null;

  constructor(
    private salaryService: SalaryService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.salaryService.getData('Table 1').subscribe(data => this.salaryTable1 = data);
  }
}
