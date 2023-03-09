import { Component } from '@angular/core';
export type EditorType = 'user' | 'informationlist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loanApplication';
  editor: EditorType = 'user';
  get showUserEditor (){
    return this.editor === 'user';
  }
  get showProfileEditor (){
return this.editor == 'informationlist'
  }
  toggleEditor(type:EditorType){
    this.editor = type;
  }
}
