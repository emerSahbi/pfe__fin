import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ToolComponent } from './tool/tool.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { GrpsInfosComponent } from './grps-infos/grps-infos.component';
import { STIXComponent } from './stix/stix.component';
import { ToolInfoComponent } from './tool-info/tool-info.component';
import { SoftwareComponent } from './software/software.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ToolComponent,
    SearchComponent,
    FooterComponent,
    GroupComponent,
    GrpsInfosComponent,
    STIXComponent,
    ToolInfoComponent,
    SoftwareComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
