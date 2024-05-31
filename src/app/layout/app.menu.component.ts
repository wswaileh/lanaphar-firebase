import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone: true,
    imports: [CommonModule, NgIf, AppMenuitemComponent]
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Inventory',
                items: [
                    { label: 'Inventory', icon: 'pi pi-fw pi-box', routerLink: ['/inventory'] }
                ]
            },
            {
                label: 'Auth',
                items: [
                    { label: 'Login', icon: 'pi pi-fw pi-home', routerLink: ['/login'] }
                ]
            }
        ];
    }
}
