import { Component} from '@angular/core';

import { Groceryitem } from './model/grocery-item';
import { GroceryFormComponent } from './form/grocery-list-form.component';

import { ListService } from '../list.service';
import {NotificationsService, SimpleNotificationsComponent} from 'angular2-notifications';

import { OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grocery-list-details',
    templateUrl: 'grocery-list.component.html',
    providers: [ ListService ],
    styleUrls: [ 'grocery-list.component.css']
})

export class GroceryListComponent implements OnInit {
    childValue: string;
    groceryitems: Groceryitem[];
    selectedItem: Groceryitem;

    constructor(
        private listService: ListService,
        private _notificationsService: NotificationsService
        ){ }

    onSelect(item: Groceryitem): void {
        this.selectedItem = item;
        this._notificationsService.success(
            'Success',
            'You have selected an Item', 
            {id: 123}
        )
    }

    onCreate(event: any) {
        console.log(event);
    }

    onDestroy(event: any) {
        console.log(event);
    }


    getItems(): void {
        this.listService.getItems().then(groceryitems => this.groceryitems = groceryitems);
    }

    ngOnInit(): void {
        this.getItems();
    }

    public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
    }
}