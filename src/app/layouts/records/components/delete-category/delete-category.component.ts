import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICategory } from '../../../../shared/interfaces/category';
import { CategoryService } from '../../../../shared/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription();
  private needUpdateList: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICategory,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  public deleteCategory(): void {
    this.sub.add(
      this.categoryService.deleteCategoryById(this.data.id)
        .subscribe(() => {
          this.categoryService.updateCategories.next();
          this.closeDialog();
        })
    );
  }

  public closeDialog(status = this.needUpdateList): void {
    this.dialogRef.close({
      isUpgrade: status
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
