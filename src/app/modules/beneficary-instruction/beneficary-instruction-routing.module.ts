import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficaryInstructionComponent } from './beneficary-instruction.component';

const routes: Routes = [
  {
  path: '', 
  component:BeneficaryInstructionComponent ,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficaryInstructionRoutingModule { }
