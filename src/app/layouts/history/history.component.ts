import { Component, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { CategoryService } from '../../shared/services/category.service';
import { EventsService } from '../../shared/services/events.service';
import { ICategory } from '../../shared/interfaces/category';
import { IEvent } from '../../shared/interfaces/event';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public categories: ICategory[] = [];
  public events: IEvent[] = [];
  public filteredEvents: IEvent[] = [];
  public isLoaded: boolean = false;
  public chartData = [];

  private sub: Subscription = new Subscription();

  constructor(
    private categoryService: CategoryService,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.sub.add(
      forkJoin<ICategory[], IEvent[]>([
        this.categoryService.getCategories(),
        this.eventsService.getEvents()
        ]
      ).subscribe(([data, res]) => {
        this.categories = data;
        this.events = res;

        this.setOriginalEvents();
        this.calculateChartData();

        this.isLoaded = true;
      })
    );
  }

  private setOriginalEvents() {
    this.filteredEvents = this.events.slice();
  }

  calculateChartData(): void {
    this.chartData = [];

    this.categories.forEach((cat) => {
      const catEvent = this.filteredEvents.filter((e) => e.category === cat.id && e.type === 'outcome');
      this.chartData.push({
        name: cat.name,
        y: catEvent.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });
    });
  }

}
