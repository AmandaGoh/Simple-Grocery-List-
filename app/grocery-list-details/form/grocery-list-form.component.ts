import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ListService } from '../../list.service';

import { Groceryitem } from '../model/grocery-item';
import { GroceryListComponent } from '../grocery-list.component';


@Component({
    moduleId: module.id,
    selector: 'grocery-form',
    templateUrl: 'grocery-list-form.component.html',
    providers: [ ListService ]
})

export class GroceryFormComponent{

    @Input() item: Groceryitem;
    @Output() updateItems = new EventEmitter<string>();
    @Output() passString = new EventEmitter<string>();

    onKey(value: string) {
        this.passString.emit(value);
    }

    groceryitem= new Groceryitem();

    constructor(
        private listService: ListService,
        public fb: FormBuilder
    ){ }

    //reactive form

    public addItemsForm = this.fb.group({
        name: '',
        quantity: '',
        measurement: ''
    });

    addItem(event:any){
        this.updateItems.emit(this.addItemsForm.value);
    }

    //measurement options
    measurements = ['','tbsp', 'tsp', 'cups', 'grams', 'kgs']
};