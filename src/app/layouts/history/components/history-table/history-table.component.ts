import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../../../../shared/interfaces/category';
import { IEvent } from '../../../../shared/interfaces/event';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['id', 'sum', 'date', 'category', 'type', 'action'];
  public dataSource: MatTableDataSource<any>;

  @Input() public categories: ICategory[] = [];
  @Input() public events: IEvent[] = [];
  @ViewChild(MatSort) private sort: MatSort;

  public ngOnInit(): void {
    this.events.forEach((e) => {
      e.catName = this.categories.find(c => c.id === e.category).name;
    });
    this.dataSource = new MatTableDataSource(this.events);
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public getEventClass(e: IEvent): object {
    return {
      'label': true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    };
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
