import { Component, Inject } from '@angular/core';
import { IEvent } from '../../interfaces/event';
import { EventsService } from '../../services/events.service';
import { BillService } from '../../services/bill.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { IBill } from '../../interfaces/bill';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  public types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];
  public event: IEvent;
  public form: FormGroup;
  public message: string = '';
  private needUpdateList: boolean = false;
  private sub: Subscription = new Subscription();

  constructor(
    private eventsService: EventsService,
    private billService: BillService,
    private dialogRef: MatDialogRef<CreateEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this._initForm();
  }

  private showMessage(text: string) {
    this.message = text;
    setTimeout(() => this.message, 5000);
  }

  public createEvent() {
    this.event = this.form.value;
    this.event.date =  moment().format('DD.MM.YYYY HH:mm:ss');
    this.event.category = this.form.value.category * 1;
    if (this.event.amount < 0) this.event.amount *= -1;

    this.sub.add(
      this.billService.getBill().subscribe(
        (bill: IBill) => {
          let value = 0;
          if (this.event.type === 'outcome') {
            if (this.event.amount > bill.value) {
              this.showMessage(`Не достаточно средств. Вам не хватает ${this.event.amount - bill.value}`);
              return;
            } else {
              value = bill.value = this.event.amount;
            }
          } else {
            value = bill.value + this.event.amount;
          }
          this.billService.updateBill({value, currency: bill.currency}).pipe(
            mergeMap(() => this.eventsService.createEvent(this.event))
          ).subscribe( () => {
            this.closeDialog();
          });
        })
    );
  }

  public closeDialog(status = this.needUpdateList): void {
    this.dialogRef.close({
      isUpgrade: status
    });
  }

  private _initForm() {
    this.form = new FormGroup({
      date: new FormControl(new Date()),
      type: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

}
