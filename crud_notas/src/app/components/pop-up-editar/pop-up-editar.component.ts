import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up-editar',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './pop-up-editar.component.html',
  styleUrl: './pop-up-editar.component.css'
})
export class PopUpEditarComponent {
  constructor(public dialogRef: MatDialogRef<PopUpEditarComponent>) {}

}
