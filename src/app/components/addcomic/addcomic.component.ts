import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddcomicService } from 'src/app/services/addcomic.service';

@Component({
  selector: 'app-addcomic',
  templateUrl: './addcomic.component.html',
  styleUrls: ['./addcomic.component.css']
})
export class AddcomicComponent {
  registerForm: FormGroup;
  selectedImage: any;
  formData: any = {
    title: "",
    issue: ""
  };
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private addComicService: AddcomicService
    
  ) {
    this.registerForm = formBuilder.group({
      title: ['Justice League', [Validators.required]],
      issue: ['44', [Validators.required]],
      year: ['1988', [Validators.required]],
      type: ['Trade', [Validators.required]],
      publisher: ['Image', [Validators.required]],
      condition: ['5', [Validators.required]],
      key: ['yes', [Validators.required]],
      description: ['Amazing Issue', [Validators.required]],
      short: ['1st Appearance of Alligators', [Validators.required]],
      characters: ['Batman', [Validators.required]],
      writer: ['Adele Sousa', [Validators.required]],
      artist: ['Carlos Sousa', [Validators.required]],
      value: ['98', [Validators.required]],
      isbn: ['999-999-2868', [Validators.required]],
      qty: ['1', [Validators.required]],
      image: ['dc.webp', [Validators.required]],
      slabbed: ['yes', [Validators.required]]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('title', this.formData.title);
      formData.append('issue', this.formData.issue);
      formData.append('image', this.selectedFile);

      this.addComicService.registerComic(formData).subscribe(
        response => {
          console.log('Response:', response);
        },
        error => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('No file selected!');
    }
  }


  selectFile(event: any): void {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
  }

  register() {
    let formData = new FormData();
    formData.append('image', this.selectedImage);

    for (let key in this.registerForm.controls) {
      formData.append(key, this.registerForm.get(key)?.value);
     }

    this.addComicService.registerComic(formData).subscribe({
      next: (result) => {
        console.log(result);
        alert('Comic (Dude) has been successfully created!');
      },
      error: (err) => {
        console.log(err.message);
        alert(err.message);
      },
    });
  }
// Getter Method
//   All the methods below return a Form Control
 
  // get titleFormControl(){
  //   return this.registerForm.get('title')!;
  // }
  
  // get issueControl(){
  //   return this.registerForm.get('issue')!;
  // }
  // get yearFormControl(){
  //   return this.registerForm.get('year')!;
  // }
  
  // get typeFormControl(){
  //   return this.registerForm.get('type')!;
  // }
  
  // get publisherFormControl(){
  //   return this.registerForm.get('publisher')!;
  // }
  // get conditionFormControl(){
  //   return this.registerForm.get('condition')!;
  // }
  // get keyControl(){
  //   return this.registerForm.get('key')!;
  // }
  // get descriptionFormControl(){
  //   return this.registerForm.get('description')!;
  // }
  // get shortControl(){
  //   return this.registerForm.get('short')!;
  // }
  // get charactersFormControl(){
  //   return this.registerForm.get('characters')!;
  // }
  // get writerFormControl(){
  //   return this.registerForm.get('writer')!;
  // }
  // get artistFormControl(){
  //   return this.registerForm.get('artist')!;
  // }
  // get valueFormControl(){
  //   return this.registerForm.get('value')!;
  // }
  // get isbnFormControl(){
  //   return this.registerForm.get('isbn')!;
  // }
  // get qtyFormControl(){
  //   return this.registerForm.get('qty')!;
  // }
  // get imageFormControl(){
  //   return this.registerForm.get('image')!;
  // }


}

// I gotta fix this shit...
