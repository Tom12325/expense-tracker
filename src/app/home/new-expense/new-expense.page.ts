import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Camera, CameraResultType} from '@capacitor/camera';

import { PhotoService } from '../../services/photo.service';
import { ExpensesService } from '../expenses.service';
import { expense } from '../expense.model';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.page.html',
  styleUrls: ['./new-expense.page.scss'],
})

export class NewExpensePage implements OnInit {

  title: string;
  date: string;
  total = 0;
  expense_new: expense;
  receipts: any = [ ];
  theActualPicture: string;
  amount: number;
  currentImg: string
  readyFlag = 0;
  showPicker = false;

  constructor(public photoService: PhotoService, private expensesService: ExpensesService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  

  ngOnInit() {
    
  }

  async takePicture() {
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
  });

  // Here you get the image as result.
  this.theActualPicture = image.dataUrl;
}

  addReceipt() {
    this.receipts.push([this.photoService.photos[0].webviewPath, this.amount])
    this.total += this.amount
    this.amount = null
    this.photoService.readyFlag = 0;
  }

  deleteEntry(src: string) {
    this.receipts = this.receipts.filter( receipt => {
      if (receipt[0] === src) {
        this.total -= receipt[1];
      }
      return receipt[0] !== src;
    });
  }
 
  addExpense() {
    this.expense_new = {
      date: this.date,
      title: this.title,
      amount: this.total,
      receipts: this.receipts
    }
    this.expensesService.addExpense(this.expense_new)
  }
}
