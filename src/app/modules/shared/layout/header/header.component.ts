import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{

    @Input() title = "This is a header";

    myArray = [1,2,3,4,5];

    headerStyle = "italic";

    uppercaseText = "UPPER TEXT";

    isoDate = '2023-06-12T22:26:55.601Z';


    birthday: Date = new Date(1988, 3, 15); // April 15, 1988


    constructor() {}
    
    ngOnInit(): void {

        console.log(this.title)
    }
}