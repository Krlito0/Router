import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { ContactComponent } from "./app/contact/contact.component";
import { SignupComponent } from "./app/signup/signup.component";
import { UserComponent } from "./app/user/user.component";
import { MenuComponent } from "./app/menu/menu.component";
import { ProfileComponent } from "./app/profile/profile.component";

const ROUTES:Routes = [
    {path:'home', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'signup', component:SignupComponent},
    {path:'user', component:UserComponent},
    {path:'menu', component:MenuComponent},
    {path:'signup', component:SignupComponent},
    {path:'user', component:UserComponent},
    {path:'user-profile', component:ProfileComponent},
    {path:'', component:ProfileComponent},    
];

export {ROUTES};