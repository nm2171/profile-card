import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  firstName!: any;
  lastName!: any;
  location!: any;
  obj = JSON.parse(localStorage.getItem('profile')!)

  constructor(private router: Router) {   
  }

  ngOnInit(): void {
    if (this.obj !== undefined || this.obj !== {}) {
      console.log(this.obj);
      
       this.firstName = document.querySelector('.firstName');
       this.firstName.innerHTML = this.obj.firstName;
       
       this.lastName = document.querySelector('.lastName');
       this.lastName.innerHTML = this.obj.lastName;
    
      this.location = document.querySelector('.location');
      this.location.innerHTML = this.obj.location; 

    }
  }

  onClick() {
    this.router.navigateByUrl('/edit');
  }

}
