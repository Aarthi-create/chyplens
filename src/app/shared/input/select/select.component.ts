import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpService } from 'src/app/core/httpservice/http.service';
import { Title } from '@angular/platform-browser';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() labelName: string='';
  @Input() inputType: string='text';
  @Input() inputplaceHolder: string='';
  @Input() inputsize: string='';
  @Input() customClassName: string='';
  @Input() spaceY?: string='mb-3';
  @Input() searchable?: any= '';
  @Input() hideError?: any= '';
  @Input() name?: any= '';
  @Input() control: any;
  @Input() fieldFormGroup: any;
  @Input() errors: boolean = false;
  @Input() items: any;
  @Input() id: any;
  @Input() set refreshItem(v : any) {
    this.items = [];
    this.items = v
  }
  
  @Input() bindLabel: string = '';
  @Input() bindValue: string = '';
  @Input() modelErrorControl: boolean = false;
  @Input() placeholder: string = '';
  @Input() multi: boolean = false;
  @Input() customError: boolean = false;
  @Input() model: any;
  @Input() listValue: any;
  @Input() listLabel: any;
  @Input() disable: boolean = false;
  @Input() isAutoFocus: any = false;
  @Output() modelChange = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();
  @ViewChild("entitySelector", { static: false }) entitySelector!: NgSelectComponent;
  @ViewChildren(NgSelectComponent) NgSelectComponents!: QueryList<NgSelectComponent>;
  @Input() notFocus:boolean = false
  PathReportString: SafeResourceUrl = ''
  fNmae: string = 'test.pdf'
  files: any = [];
  dropdownList : any= [];
  selectedItems : any= [];
  dropdownSettings : IDropdownSettings= {};

  constructor(private http: HttpService, private modalService: NgbModal, protected _sanitizer: DomSanitizer,private titleService: Title,private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      // set the bindValue to global config when you use the same 
      // bindValue in most of the place. 
      // You can also override bindValue for the specified template 
      // by defining `bindValue` as property
      // Eg : <ng-select bindValue="some-new-value"></ng-select>
      this.config.bindValue = 'value';

   }

   
  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    
    const yri = encodeURIComponent('dummy.pdf')
    const pdf: any =''
    // this.titleService.setTitle('til.pdf')
    // this.PathReportString = this._sanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;base64,${pdf}`) 
    const FILE_NAME = 'myfile.pdf';
const file_header = ';headers=filename';
const byteArray = new Uint8Array(
      atob(pdf)
        .split("")
        .map(char => char.charCodeAt(0))
    );
    const file = new Blob([byteArray], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    this.PathReportString = this._sanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;base64,${pdf}`)    
  }

  onItemSelect(item: any) {
  }
  onSelectAll(items: any) {
  }
  onChange(event:any){
    this.valueChange.emit(event)
  }
 
  onTabPress(event:any) {
    var that = this;
    setTimeout(() => {
      if (this.notFocus == false) {
        that.entitySelector.open();
        // let el: HTMLElement = this.myDiv.nativeElement
      }
    }, 1);
    
  }
}
