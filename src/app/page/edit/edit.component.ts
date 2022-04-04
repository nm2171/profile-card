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

    if (!localStorage.getItem("profile")) {
      this.editInfo = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        location: ['', Validators.required],
        profileImg: ['', Validators.required],
        details: ['', Validators.required]
      });
    } else {
      this.editInfo = this.formBuilder.group({
        firstName: [JSON.parse(localStorage.getItem('profile')!).firstName, Validators.required],
        lastName: [JSON.parse(localStorage.getItem('profile')!).lastName, Validators.required],
        location: [JSON.parse(localStorage.getItem('profile')!).location, Validators.required],
        profileImg: [JSON.parse(localStorage.getItem('profile')!).profileImg, Validators.required],
        details: [JSON.parse(localStorage.getItem('profile')!).details, Validators.required]
      });
    }

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
