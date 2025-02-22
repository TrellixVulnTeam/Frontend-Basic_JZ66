import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HilightDirectiveDirective } from './custom-attirbute/basic-hilight-directive/hilight-directive.directive';
import { HilightDirectiveWithRendererDirective } from './custom-attirbute/hilight-directive-with-renderer/hilight-directive-with-renderer.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    HilightDirectiveDirective,
    HilightDirectiveWithRendererDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
