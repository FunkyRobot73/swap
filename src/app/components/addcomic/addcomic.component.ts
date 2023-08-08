import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddcomicService } from 'src/app/services/addcomic.service';

@Component({
  selector: 'app-addcomic',
  templateUrl: './addcomic.component.html',
  styleUrls: ['./addcomic.component.css']
})
export class AddcomicComponent {
  comicForm: FormGroup;
  selectedImage: any;

  constructor(
    private formBuilder: FormBuilder,
    private addComicService: AddcomicService
  ) {
    this.comicForm = formBuilder.group({
      title: ['', [Validators.required]],
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
      // image: ['', [Validators.required]]
    });
  }

  selectFile(event: any): void {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
  }

  registerComic() {
    let formData = new FormData();
    formData.append('image', this.selectedImage);

    for (let key in this.comicForm.controls) {
      formData.append(key, this.comicForm.get(key)?.value);
    }

    this.addComicService.registerComics(formData).subscribe({
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
//   All the methods below return a Form Control
 
  get titleFormControl(){
    return this.comicForm.get('title')!;
  }
  
  get issueControl(){
    return this.comicForm.get('issue')!;
  }
  get yearFormControl(){
    return this.comicForm.get('year')!;
  }
  
  get typeFormControl(){
    return this.comicForm.get('type')!;
  }
  
  get publisherFormControl(){
    return this.comicForm.get('publisher')!;
  }
  get conditionFormControl(){
    return this.comicForm.get('condition')!;
  }
  get keyControl(){
    return this.comicForm.get('key')!;
  }
  get descriptionFormControl(){
    return this.comicForm.get('description')!;
  }
  get shortControl(){
    return this.comicForm.get('short')!;
  }
  get charactersFormControl(){
    return this.comicForm.get('characters')!;
  }
  get writerFormControl(){
    return this.comicForm.get('writer')!;
  }
  get artistFormControl(){
    return this.comicForm.get('artist')!;
  }
  get valueFormControl(){
    return this.comicForm.get('value')!;
  }
  get isbnFormControl(){
    return this.comicForm.get('isbn')!;
  }
  get qtyFormControl(){
    return this.comicForm.get('qty')!;
  }
  get imageFormControl(){
    return this.comicForm.get('image')!;
  }
}
