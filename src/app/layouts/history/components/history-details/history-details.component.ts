import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../../../shared/interfaces/event';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../../../../shared/services/category.service';
import { EventsService } from '../../../../shared/services/events.service';
import { ICategory } from '../../../../shared/interfaces/category';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss']
})
export class HistoryDetailsComponent implements OnInit {

  public category;
  public event: IEvent;
  public isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this._loadData();
  }

  private _loadData(): void {
    this.route.params.pipe(
      mergeMap((params: Params) => this.eventsService.getEventById(params['id'])),
      mergeMap((event: IEvent) => {
        this.event = event;
        return this.categoryService.getCategoryById(event.category);
      })
    ).subscribe((category: ICategory) => {
      this.category = category;
      this.isLoaded = true;
    });
  }
}
