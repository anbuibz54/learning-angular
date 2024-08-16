import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
@Component({
    selector: 'auth',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    template: `<router-outlet />
    `
})
export class Auth { }