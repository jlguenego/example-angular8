import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { QuizzCreateModule } from './quizz-create/quizz-create.module';
import { QuizzExecModule } from './quizz-exec/quizz-exec.module';
import { WidgetModule } from './widget/widget.module';

import { AppComponent } from './app.component';
import { QuizzHttpService } from './quizz-http.service';
import { QuizzService } from './quizz.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MainModule,
    QuizzCreateModule,
    QuizzExecModule,
    WidgetModule
  ],
  providers: [{ provide: QuizzService, useClass: QuizzHttpService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
