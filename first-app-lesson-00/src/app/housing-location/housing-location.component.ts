import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink],
  // template: ` <p>housing-location works!</p> `,
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <!-- Accesing and Including values like this code, {{ housingLocation.name }} is called interpolation. Same for alt and city -->
      <p class="listing-location">{{ housingLocation.city }},</p>
      <a [routerLink]="['details/', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  //Now, the HousingLocationComponent has access to data that it can use to customize the component's display. Also we can acess the value in the template of HousingLocationComponent(see avobe) using interpolation. Also binding it inside the template of HomeComponent ensures any changes here will refelect in the HomeComponent. But the question is from where and how does it gets it value from parent? In the parent template you have to pass the input to the child as a property of the child component. See the parent HomeComponent template, a object is binded there like [housingLocation]="housingLocation"
  @Input() housingLocation!: HousingLocation; //it gets the value from HomeComponent. HomeComponent gets the value from HousingService
  // Why ! is used? => Usually when @Input is used, Input expects the value to be passed. In this case there is no default value is being used. In our example application case we know that the value will be passed in - this is by design. The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
}
// console.log(JSON.stringify('ahjsashabs'));
