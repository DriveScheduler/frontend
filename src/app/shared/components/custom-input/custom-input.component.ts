import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent implements OnInit{
  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() inputIcon: string;
  @Input() inputType: string;
  @Input() defaultValue: string;

  constructor() {
    this.control = new FormControl();
    this.placeholder = '';
    this.inputIcon = '';
    this.defaultValue = '';
    this.inputType = 'text';
  }

  ngOnInit() {
    this.control.setValue(this.defaultValue);
  }
}
