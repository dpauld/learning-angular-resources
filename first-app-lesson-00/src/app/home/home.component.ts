import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

//imported intefaces, we usually do not add interfaces in the imports array of @Component decorator
import { HousingLocation } from '../housinglocation';

import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  // template: `
  //   <p>
  //     home works!
  //   </p>
  // `,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <!-- <app-housing-location
        [housingLocation]="housingLocation"
      ></app-housing-location> -->
      <!-- <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location> -->
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // housingLocation: HousingLocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 2,
  //   wifi: true,
  //   laundry: false,
  // };
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  //dependency Injection with inject
  housingService: HousingService = inject(HousingService);
  constructor() {
    // this.housingLocationList = this.housingService.getHousingLocationList();
    // this.filteredLocationList = this.housingLocationList;

    //read the housingLocationList from promise based result from HousingService
    this.housingService
      .getHousingLocationList()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(queryText: string) {
    console.log(queryText);
    //if there is queryText provided then do something, otherwise keep the default value of filtered
    if (!queryText) {
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(queryText.toLowerCase())
    );
  }
}
