import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/blog.model';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notes = this.notesService.getAll();
  }
  deleteNote(id: number) {
    this.notesService.delete(id);
  }
}
