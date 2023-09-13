import { Component, OnInit } from '@angular/core';
import { AuthService } from '@chimiposhi/users';

@Component({
    selector: 'admin-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    constructor(private authService: AuthService) {}

    logoutUser() {
        this.authService.logout();
    }
}
