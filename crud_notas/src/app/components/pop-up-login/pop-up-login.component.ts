import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up-login',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './pop-up-login.component.html',
  styleUrl: './pop-up-login.component.css'
})
export class PopUpLoginComponent {
  constructor(public dialogRef: MatDialogRef<PopUpLoginComponent>) {}
}
