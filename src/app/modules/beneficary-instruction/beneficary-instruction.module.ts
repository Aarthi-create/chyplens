import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficaryInstructionRoutingModule } from './beneficary-instruction-routing.module';
import { BeneficaryInstructionComponent } from './beneficary-instruction.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BeneficaryInstructionComponent
  ],
  imports: [
    CommonModule,
    BeneficaryInstructionRoutingModule,
    SharedModule
  ]
})
export class BeneficaryInstructionModule { }
