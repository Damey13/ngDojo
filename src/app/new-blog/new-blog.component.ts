import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/blog.model';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  note!: Note;
  noteId!: number;
  new!: boolean;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();

      if (params['id']) {
        this.note = this.notesService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      } else {
        const newLocal = this;
        newLocal.new = true;
      }
    });
  }
  onSubmit(form: NgForm) {
    if (this.new) {
      this.notesService.add(form.value);
      console.log(form.value);
    } else {
      this.notesService.update(
        this.noteId,
        form.value.title,
        form.value.body,
        form.value.author
      );
    }
    this.router.navigateByUrl('/');
  }
}
