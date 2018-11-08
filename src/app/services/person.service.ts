import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { Person } from "../models/Person";

@Injectable({
  providedIn: "root"
})
export class PersonService {
  personsCollection: AngularFirestoreCollection<Person>;
  persons: Observable<Person[]>;

  constructor(public afs: AngularFirestore) {
    this.personsCollection = this.afs.collection("person");
    this.personsCollection = afs.collection<Person>("person");

    this.persons = this.afs
      .collection("person")
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Person;
          data.id = a.payload.doc.id;
          return data;
        });
      });
  }

  getPersons() {
    return this.persons;
  }

  addPerson(person: Person) {
    this.personsCollection.add(person);
  }
}
