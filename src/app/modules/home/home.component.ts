import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})

export class HomeComponent {
    title = 'my-course-app';
    headerTitle: string | undefined = "This is a header";
    isHeaderVisible: boolean = true;
  
    name: string | undefined;
    surname: string | undefined;
  
    formGroup: FormGroup | undefined;
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router
    ) {
    }
    
    observable$: Observable<number> = of(1,2,3,4,5);
  
    numberSubscription: Subscription | undefined;
    formSubscription: Subscription | undefined;
    
    ngOnInit(): void {
      this.displayObservableNumbers();
      this.formGroup = this.formBuilder.group({
        name: [undefined, [Validators.required, Validators.email, 
        Validators.minLength(5)]],
        surname: [undefined],
      });
      this.observeFormChanges();
    }
  
    private displayObservableNumbers(): void {
      this.numberSubscription = this.observable$.subscribe((value) => {
        console.log('Here I am');      
        console.log(value);      
      })
    }
  
    private observeFormChanges(): void {
      this.formSubscription = this.formGroup?.valueChanges.subscribe((val) =>{
        console.log(val);
        
      })
    }
  
    onFormSubmit(): void{
      console.log(this.formGroup?.valid);    
      console.log(this.formGroup?.value);
    }
  
    ngOnDestroy(): void {
      this.numberSubscription?.unsubscribe();
      this.formSubscription?.unsubscribe();
    }

    goToProfileAndLogCabbage(): void {
      console.log('Cabbage');
      this.router.navigate(['/profile']);
    }
}