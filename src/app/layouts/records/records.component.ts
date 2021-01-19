import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { ICategory } from '../../shared/interfaces/category';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../shared/services/category.service';
import { CreateEventComponent } from '../../shared/components/create-event/create-event.component';

export interface IDataAfterCloseModal {
  isUpgrade: boolean;
}

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  public categories: ICategory[] = [];
  private sub: Subscription = new Subscription();


  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
  ) { }

  public ngOnInit( ): void {
    this._loadData();

    this._updateCategoriesData();
  }

  public createCategory(): void {
    const dialogRef = this.dialog.open<CreateCategoryComponent>(CreateCategoryComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(({ isUpgrade }: IDataAfterCloseModal) => {
      if (isUpgrade) {
        this._loadData();
      }
    });
  }

  public createEvent(): void {
    const dialogRef = this.dialog.open<CreateEventComponent>(CreateEventComponent, {
      width: '450px',
      data: this.categories
    });

    dialogRef.afterClosed().subscribe(({ isUpgrade }: IDataAfterCloseModal) => {
      if (isUpgrade) {
        this._loadData();
      }
    });
  }

  private _loadData(): void {
    this.sub.add(
      this.categoryService.getCategories()
        .subscribe((data: ICategory[]) => {
          this.categories = data;
        })
    );
  }

  private _updateCategoriesData(): void {
    this.sub.add(
      this.categoryService.updateCategories.asObservable()
        .subscribe(() => {
          this._loadData();
        })
    );
  }

}
