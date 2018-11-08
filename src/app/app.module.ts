import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PersonsComponent } from "./components/persons/persons.component";

import { PersonService } from "./services/person.service";
import { AddPersonComponent } from "./components/add-person/add-person.component";

@NgModule({
  declarations: [AppComponent, PersonsComponent, AddPersonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, "angularfs"),
    AngularFirestoreModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
