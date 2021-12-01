import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DetailsComponent } from './cv/details/details.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import {LoggerService} from "./services/logger.service";
import { TodoComponent } from './todo/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    DetailsComponent,
    NgStyleComponent,
    NgClassComponent,
    HighlightDirective,
    MiniWordComponent,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
