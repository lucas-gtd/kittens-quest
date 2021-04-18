import { Routes } from "@angular/router";
import { CreateKittenComponent } from "./create-kitten/create-kitten.component";
import { ListKittenComponent } from "./list-kitten/list-kitten.component";

export const ROUTES: Routes = [
    {path: 'create', component: CreateKittenComponent},
    {path: '', component: ListKittenComponent}
]