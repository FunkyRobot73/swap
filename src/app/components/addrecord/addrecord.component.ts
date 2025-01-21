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
  formData: any = {
    artist: "Adele",
    title: "Thriller",
    year: "1999",
    type: "LP"
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private addrecordService: AddrecordService
  ) {
    this.registerForm = formBuilder.group({
      // id: ['', [Validators.required]],
      artist: ['Adele', [Validators.required]],
      title: ['Thriller', [Validators.required]],
      year: ['1999', [Validators.required]],
      type: ['LP', [Validators.required]]
      // genre: ['', [Validators.required]],      
      // image: ['', [Validators.required]],
      // code: ['', [Validators.required]],
      // condition: ['', [Validators.required]],
      // price: ['', [Validators.required]]
    });
  }

  
  register() {
    let formData = new FormData();
    

    for (let key in this.registerForm.controls) {
      formData.append(key, this.registerForm.get(key)?.value);
    }

    this.addrecordService.registerRecord(formData).subscribe({
      next: (result) => {
        console.log(result);
        alert('Record has been successfully created!');
      },
      error: (err) => {
        console.log(err.message);
        alert(`Oh NO ${err.message}`);
      },
    });
  }
  
  // Getter Method
  //   All the methods below return a Form Control
 
// get artistFormControl(){
//   return this.registerForm.get('artist')!;
// }

// get titleFormControl(){
//   return this.registerForm.get('title')!;
// }

// get yearFormControl(){
//   return this.registerForm.get('year')!;
// }

// get typeFormControl(){
//   return this.registerForm.get('type')!;
// }

};