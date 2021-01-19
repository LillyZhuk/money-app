import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ICategory } from '../../../../shared/interfaces/category';
import { CategoryService } from '../../../../shared/services/category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  public categories: ICategory[] = [];
  public currentCategory: ICategory;
  public form: FormGroup;
  private needUpdateList: boolean = false;
  private sub: Subscription = new Subscription();

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.categories = this.data.categories;
    this.currentCategory = this.data.category;
    this._initForm();
  }

  onCategoryChange(e) {
    this.currentCategory = this.categories.find(
      c => c.id === +e.value
    );
    this.form.patchValue({
      capacity: this.currentCategory.capacity,
      name: this.currentCategory.name,
      id: this.currentCategory.id
    });
  }

  public updateCategory(): void {
    const category = this.form.value;
    this.categoryService.updateCategory(category).subscribe(
      (res: ICategory) => {
        this.categoryService.updateCategories.next();
        this.closeDialog();
      }
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

  private _initForm() {
    this.form = new FormGroup({
      capacity: new FormControl(this.data.category.capacity, [Validators.required]),
      name: new FormControl(this.data.category.name, [Validators.required, Validators.min(1)]),
      id: new FormControl(this.data.category.id)
    });
  }

}
