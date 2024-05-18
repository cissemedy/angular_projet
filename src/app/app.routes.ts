import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
export const routes: Routes = [
    {path: "produits", component : ProduitsComponent},
    {path: "add-produit", component : AddProduitComponent},
    {path: "", redirectTo: "produits", pathMatch: "full" }

];
