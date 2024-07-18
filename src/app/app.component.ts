import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionsComponent } from "./transactions/transactions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransactionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'financial-tracker';
}
