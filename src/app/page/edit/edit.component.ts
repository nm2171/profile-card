import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  editInfo!: FormGroup;
  response!: boolean;

  firstName!: any;
  lastName!: any;
  location!: any;
  key: string = 'profile';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {


    this.editInfo = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
  
  confirm(res: string) {
    if (res === 'yes') {
      localStorage.setItem(this.key, JSON.stringify(this.editInfo.value));
      this.router.navigateByUrl('/home')
    }

    if (res === 'no') {
      this.router.navigateByUrl(`/home`);
    }
  }
}
