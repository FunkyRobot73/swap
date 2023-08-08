import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddrecordService } from 'src/app/services/addrecord.service';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent {
  recordForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private addrecordService: AddrecordService
  ) {
    this.recordForm = formBuilder.group({
      artist: ['', [Validators.required]],
      title: ['', [Validators.required]],
      year: ['', [Validators.required]],
      type: ['', [Validators.required]],
      // image: ['', [Validators.required]]
    });
  }

  
  registerRecord() {
    let formData = new FormData();
    

    for (let key in this.recordForm.controls) {
      formData.append(key, this.recordForm.get(key)?.value);
    }

    this.addrecordService.registerRecord(formData).subscribe({
      next: (result) => {
        console.log(result);
        alert('Blog has been successfully created!');
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
  return this.recordForm.get('artist')!;
}

get titleFormControl(){
  return this.recordForm.get('title')!;
}

get yearFormControl(){
  return this.recordForm.get('year')!;
}

get typeFormControl(){
  return this.recordForm.get('type')!;
}

};