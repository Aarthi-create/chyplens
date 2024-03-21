import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './core/guard/guard.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./core/login/login.module").then(
        (m) => m.LoginModule
      ),
  },
  {
      path: 'beneficary-instruction', 
      loadChildren: () =>
      import("./modules/beneficary-instruction/beneficary-instruction.module").then(
        (m) => m.BeneficaryInstructionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
