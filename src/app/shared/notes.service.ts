import { Injectable } from '@angular/core';
import { Note } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = new Array<Note>();

  constructor() {}

  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    return index;
  }

  update(id: number, title: string, body: string, author: string) {
    let note = this.notes[id];
    note.title = title;
    note.body = body;
    note.author = author;
  }

  delete(id: number) {
    this.notes.splice(id, 1);
  }
}
