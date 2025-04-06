import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
        <section>
            <div>
                <app-navbar></app-navbar>
            </div>
    
            <h1 class="font__raleway" > SAKURA RAMEN </h1>
            <h2 class="font__raleway" > Welcome to our ramen shop! </h2>
        </section>
    `,
    styleUrls:['./landingPage.component.scss'],
})
export class LandingPageComponent {}
