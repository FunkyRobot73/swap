import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddrecordService } from 'src/app/services/addrecord.service';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent {
  registerForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private addrecordService: AddrecordService
  ) {
    this.registerForm = formBuilder.group({
      artist: ['', [Validators.required]],
      title: ['', [Validators.required]],
      year: ['', [Validators.required]],
      type: ['', [Validators.required]],
      genre: ['', [Validators.required]],      
      image: ['', [Validators.required]],
      code: ['', [Validators.required]],
      condition: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  
  registerRecord() {
    let formData = new FormData();
    

    for (let keyy in this.registerForm.controls) {
      formData.append(keyy, this.registerForm.get(keyy)?.value);
    }

    this.addrecordService.registerRecord(formData).subscribe({
      next: (result) => {
        console.log(result);
        alert('Record has been successfully created!');
      },
      error: (err) => {
        console.log(err.message);
        alert(err.message);
      },
    });
  }
  
  // Getter Method
  //   All the methods below return a Form Control
 
get artistFormControl(){
  return this.registerForm.get('artist')!;
}

get titleFormControl(){
  return this.registerForm.get('title')!;
}

get yearFormControl(){
  return this.registerForm.get('year')!;
}

get typeFormControl(){
  return this.registerForm.get('type')!;
}

};