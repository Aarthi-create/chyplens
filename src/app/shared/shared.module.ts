import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './input/select/select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    SelectComponent,
    NavLinkComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    SelectComponent,
    NgSelectModule,
    ProfileComponent,
    NgOptionHighlightModule
  ]
})
export class SharedModule { }
