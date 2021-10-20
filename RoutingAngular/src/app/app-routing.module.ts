import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    // {path: 'post', component: PostComponent},
    {path: 'posts/:id',component:PostComponent},
    {path: 'posts',component:PostsComponent},
];
// http://localhost:4200/ - HomeComponent
// http://localhost:4200/about - AvoutComponent
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class ApproutingModule{
    
}