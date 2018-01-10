import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './test.component';

import { CutPipe } from './cut.pipe';


const APPROUTES:Routes = [
  {path:'' , component:UserComponent},  
  {path:'aboutApp' , component:AboutComponent},
  {path:'test' , component:TestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    TestComponent,
    CutPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
