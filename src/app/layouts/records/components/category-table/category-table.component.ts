import { Component, Input } from '@angular/core';
import { CategoryService } from '../../../../shared/services/category.service';
import { Subscription } from 'rxjs';
import { ICategory } from '../../../../shared/interfaces/category';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent {
  public displayedColumns: string[] = ['position', 'name', 'capacity', 'action'];
  @Input() public categories: ICategory[];

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) { }

  public deleteCategory(category: number): void {
    const dialogRef = this.dialog.open<DeleteCategoryComponent>(DeleteCategoryComponent, {
      width: '450px',
      data: category
    });

    dialogRef.afterClosed().subscribe();
  }

  public editCategory(category: ICategory): void {
    const dialogRef = this.dialog.open<EditCategoryComponent>(EditCategoryComponent, {
      width: '450px',
      data: {
        category,
        categories: this.categories
      }
    });

    dialogRef.afterClosed().subscribe();
  }

}
