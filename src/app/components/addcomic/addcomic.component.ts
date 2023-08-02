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
      publisher: ['', [Validators.required]],
      // image: ['', [Validators.required]]
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
        alert('Blog has been successfully created!');
      },
      error: (err) => {
        console.log(err.message);
        alert(err.message);
      },
    });
  }

}
