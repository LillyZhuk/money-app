import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../../../shared/services/category.service';
import { ICategory } from '../../../../shared/interfaces/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnDestroy {

  public form: FormGroup;
  private needUpdateList: boolean = false;
  private sub: Subscription = new Subscription();

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<CreateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this._initForm();
  }

  public createCategory() {
    this.sub.add(
      this.categoryService.createCategory(this.form.value).subscribe(
        (category: ICategory) => {
          this.closeDialog(true);
          this.categoryService.updateCategories.next();
        }
      )
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
      capacity: new FormControl(1, [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }
}
