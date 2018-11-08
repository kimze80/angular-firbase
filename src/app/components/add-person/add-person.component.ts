import { Component, OnInit } from "@angular/core";
import { PersonService } from "../../services/person.service";
import { Person } from "../../models/Person";

@Component({
  selector: "app-add-person",
  templateUrl: "./add-person.component.html",
  styleUrls: ["./add-person.component.css"]
})
export class AddPersonComponent implements OnInit {
  person: Person = {
    name: "",
    lastname: "",
    participation: ""
  };

  constructor(private personService: PersonService) {}

  ngOnInit() {}

  onSubmit() {
    if (
      this.person.name != "" &&
      this.person.lastname != "" &&
      this.person.participation != ""
    ) {
      this.personService.addPerson(this.person);
      this.person.name = "";
      this.person.lastname = "";
      this.person.participation = "";
    }
  }
}
