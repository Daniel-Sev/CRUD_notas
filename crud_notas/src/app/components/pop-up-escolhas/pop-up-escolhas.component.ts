import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up-escolhas',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './pop-up-escolhas.component.html',
  styleUrl: './pop-up-escolhas.component.css'
})
export class PopUpEscolhasComponent {
  constructor(public dialogRef: MatDialogRef<PopUpEscolhasComponent>) {}
}
