import { Component, OnInit } from "@angular/core";
import { PersonService } from "../../services/person.service";
import { Person } from "../../models/Person";
import { Chart } from "chart.js";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"]
})
export class PersonsComponent implements OnInit {
  persons: Person[];
  constructor(private personService: PersonService) {}
  chart = [];
  ngOnInit() {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
      const labelName = persons.map(labels => {
        return labels.name;
      });

      const dataNum = persons.map(dataString => {
        return dataString.participation;
      });

      const dataNumber = dataNum.map(Number);

      this.chart = new Chart("myChart", {
        type: "doughnut",

        data: {
          labels: labelName,
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: [
                "rgb(255, 99, 132, 0.6)",
                "rgb(255, 159, 64, 0.6)",
                "rgb(255, 206, 86, 0.6)",
                "rgb(54, 162, 235, 0.6)",
                "rgb(75, 192, 192, 0.6)",
                "rgb(153, 102, 255, 0.6)"
              ],
              data: dataNumber
            }
          ]
        },

        options: {
          legend: {
            position: "right"
          }
        }
      });
    });
  }
}
