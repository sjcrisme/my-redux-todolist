import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoEffects } from './todo.effects';
import { AppComponent } from './app.component';
import { reducers } from './reducers';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { TodoInfoComponent } from './todo-info/todo-info.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailTodoComponent,
    TodoInfoComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 35 //  Retains last 35 states
    })
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
