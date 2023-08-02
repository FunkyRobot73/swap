import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddcomicService } from 'src/app/services/addcomic.service';

@Component({
  selector: 'app-addcomic',
  templateUrl: './addcomic.component.html',
  styleUrls: ['./addcomic.component.css']
})
export class AddcomicComponent {
  addComicForm: FormGroup;
  selectedImage: any;

  constructor(
    private formBuilder: FormBuilder,
    private addComicService: AddcomicService
  ) {
    this.addComicForm = formBuilder.group({
      title: ['', [Validators.required, Validators.email]],
      issue: ['', [Validators.required]],
      year: ['', [Validators.required]],
      type: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      condition: ['', [Validators.required]],
      key: ['', [Validators.required]],
      description: ['', [Validators.required]],
      short: ['', [Validators.required]],
      characters: ['', [Validators.required]],
      writer: ['', [Validators.required]],
      artist: ['', [Validators.required]],
      value: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  selectFile(event: any): void {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
  }

  register() {
    let formData = new FormData();
    formData.append('image', this.selectedImage);

    for (let key in this.addComicForm.controls) {
      formData.append(key, this.addComicForm.get(key)?.value);
    }

    this.addComicService.registerComic(formData).subscribe({
      next: (result) => {
        console.log(result);
        alert('Comic has been successfully created!');
      },
      error: (err) => {
        console.log(err.message);
        alert(err.message);
      },
    });
  }
// Getter Method
  // All the methods below return a Form Control
  get titleFormControl(){
    return this.addComicForm.get('title')!;
  }
  
  get issueControl(){
    return this.addComicForm.get('issue')!;
  }
  get yearFormControl(){
    return this.addComicForm.get('year')!;
  }
  
  get typeFormControl(){
    return this.addComicForm.get('type')!;
  }
  
  get publisherFormControl(){
    return this.addComicForm.get('publisher')!;
  }
  get conditionFormControl(){
    return this.addComicForm.get('condition')!;
  }
  get keyControl(){
    return this.addComicForm.get('key')!;
  }
  get descriptionFormControl(){
    return this.addComicForm.get('description')!;
  }
  get shortControl(){
    return this.addComicForm.get('short')!;
  }
  get charactersFormControl(){
    return this.addComicForm.get('characters')!;
  }
  get writerFormControl(){
    return this.addComicForm.get('writer')!;
  }
  get artistFormControl(){
    return this.addComicForm.get('artist')!;
  }
  get valueFormControl(){
    return this.addComicForm.get('value')!;
  }
  get isbnFormControl(){
    return this.addComicForm.get('isbn')!;
  }
  get qtyFormControl(){
    return this.addComicForm.get('qty')!;
  }
  get imageFormControl(){
    return this.addComicForm.get('image')!;
  }
}
