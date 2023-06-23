import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

const routes: Routes = [{
  path: "", component: BlogComponent
},
{
  path: "contact", component: ContactComponent
},
{
  path: "about", component: AboutComponent
},
{
  path: "entry/:indexFromRouting", component: EntryDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
