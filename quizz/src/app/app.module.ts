import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { QuizzCreateModule } from './quizz-create/quizz-create.module';
import { QuizzExecModule } from './quizz-exec/quizz-exec.module';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MainModule,
    QuizzCreateModule,
    QuizzExecModule,
    WidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
