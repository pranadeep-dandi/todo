import { Component } from '@angular/core';
import { RouterOutlet, } from '@angular/router';
import{FormsModule} from'@angular/forms';
import { NgFor } from '@angular/common';
import { log } from 'console';

export interface TodoItems{
  id:number;
  task:string;
  completed:boolean
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
todoList : TodoItems [] = [];
newTask:string= ''

addTask():void{
 if( this.newTask.trim() !==''){
  const newTodoItem :TodoItems = {
    id : Date.now(),
    task: this.newTask,
    completed:false

  }
this.todoList.push(newTodoItem)
// console.log(this.todoList)
this.newTask=''
 }
}
toggleCompleted(index:number ):void{
 this.todoList[index].completed = !this.todoList[index].completed
}
deleteTask(id:number):void{
this.todoList = this.todoList.filter(item =>item.id !== id)
console.log(this.todoList);

}
}
