import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../shared/modal.service';
import {ApiService} from '../../shared/api.service';
import { Task } from 'src/app/shared/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(public modal: ModalService, private api: ApiService) {
  }

  tasks: Task[];

  // todo scroll to see more tasks...
  // todo get names from ids...
  // todo ask mason to update based on new task description

  // todo should tasks update in real time?
  // todo errors if not able to fetch certain data

  // todo add date to tasks...? backend shit
  // todo fix a bunch of shit.

  // todo get maintainer by id

  // todo create task not consistent with target date...
  // todo remove extra task parameters...

  ngOnInit(): void {
    this.getTasks();
  }


  // todo convert tasks to usable format by getting person from user

  /* updates `tasks` array with new tasks */
  getTasks() {
    this.api.getTasks([]).subscribe((res) => {
      this.tasks = res['tasks'];
      console.log(this.tasks); // todo remove later...
    })
  }




  // todo manual way to resolve tasks?



  clearTasks(): void {
    for (let task of this.tasks.filter((task) => task.status == 'Completed')) {
      this.resolveTask(task.task_id);
    }
  }

  resolveTask(taskId: string) {
    this.api.resolveTask({
      'task_id': taskId
    }).subscribe((res) => {
        this.getTasks();
    })
  }

  // todo handle error


  /* export task data to csv */
  exportTaskData() {
    let rowDelimiter = '\n';
    let columnDelimiter = ',';
    let formattedData = 'data:text/csv;charset=utf-8,';

    //setup header of csv as Task, Person, Status
    formattedData +=
      'Task' +
      columnDelimiter +
      'Person' +
      columnDelimiter +
      'Status' +
      rowDelimiter;

    //loop through tasks and add data to csv
    this.tasks.forEach(function(item, index) {
      formattedData +=
        item.task_name +
        columnDelimiter +
        item.assigned_to +
        columnDelimiter +
        item.status +
        rowDelimiter;
    });

    //Download data as a csv
    let encodedUri = encodeURI(formattedData);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Tasks.csv');
    document.body.appendChild(link);
    link.click();
  }

}
