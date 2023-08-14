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
      artisto: ['', [Validators.required]],
      titleo: ['', [Validators.required]],
      yearo: ['', [Validators.required]],
      typeo: ['', [Validators.required]],
      // image: ['', [Validators.required]]
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
  return this.registerForm.get('artisto')!;
}

get titleFormControl(){
  return this.registerForm.get('titleo')!;
}

get yearFormControl(){
  return this.registerForm.get('yearo')!;
}

get typeFormControl(){
  return this.registerForm.get('typeo')!;
}

};