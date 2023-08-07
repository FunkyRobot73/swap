import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent {
  recordForm: FormGroup;
  selectedImage: any;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService
  ) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      title: ['', [Validators.required]],
      post: ['', [Validators.required]],
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

    for (let key in this.registerForm.controls) {
      formData.append(key, this.registerForm.get(key)?.value);
    }

    this.blogService.registerBlog(formData).subscribe({
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
