import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownComponent } from './countdown/countdown.component';
import { FormatTimePipe } from './format-time.pipe';
import { YourTurnComponent } from './your-turn/your-turn.component';
import { FormsModule } from '@angular/forms';
import { MemeComponent } from './meme/meme.component';
import { HttpClientModule } from '@angular/common/http';
import { TriviaComponent } from './trivia/trivia.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    FormatTimePipe,
    YourTurnComponent,
    MemeComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    NgbPaginationModule, 
    NgbAlertModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
