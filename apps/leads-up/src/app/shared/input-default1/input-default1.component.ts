import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'solu-dev-input-default1',
  standalone: true,
  imports: [CommonModule, InputTextModule],
  templateUrl: './input-default1.component.html',
  styleUrls: ['./input-default1.component.css'],
})
export class InputDefault1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
