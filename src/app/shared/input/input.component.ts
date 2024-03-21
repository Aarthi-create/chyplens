import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  isChecked: any;

  @Input() labelName: string = "";
  @Input() inputType: string = "text";
  @Input() inputplaceHolder: string = "";
  @Input() inputsize: string = "";
  @Input() customClassName: string = "";
  @Input() spaceY?: string = "mb-3";
  @Input() disabled: boolean = false;
  @Input() formControl:any
  @Input() readonly: boolean = false;
  @Input() hideError: boolean = false;
  @Input() maxLength: any=50;
  // @Input() errors: boolean = false;
  @Input() modelErrorControl: boolean = false;
  @Input() ifRequired: boolean = false;

  @Input() type: string = "";
  @Input() control: any;
  @Output() check: EventEmitter<any>;

  @Input() model: any = "";
  @Input() deleteBtn: any = "";
  @Input() editBtn: any = "";
  @Input() keypress: any="";
  @Output() modelChange = new EventEmitter<string>();
  @Output() deleteClick = new EventEmitter<string>();
  @Input() isAutoFocus: any = false;

  constructor() {
    this.check = new EventEmitter();
  }

  ngOnInit(): void {}

  onInFocus(id: string) {
    setTimeout(()=> {
      const focusInput = document.getElementById(id);
      focusInput?.focus();
    })
  }
}
