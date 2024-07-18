import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  // '!' > declare later
  transactionForm!: FormGroup;
  transactions: Array<{ description: string; amount: number; date: string }> = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
    });

    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      this.transactions = JSON.parse(savedTransactions);
    }
  }

  addTransaction(): void {
    if (this.transactionForm.valid) {
      const newTransaction = this.transactionForm.value;
      this.transactions.push(newTransaction);
      this.transactionForm.reset();

      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    } else {
      // throwing the form dirty error in console for now
      console.log("Please fill in all the input boxes in the form.")
    }
  }
}
