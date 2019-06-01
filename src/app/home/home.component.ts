import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  skills: string[] = [
    'C#',
    'Sql',
    'EntityFramework',
    'Angular',
    'Javascript',
    'Typescript',
    'CSS',
    'HTML',
    'MVC',
    'Python',
    'Communication Skills',
    'Scrum Certified',
    'Easilly Adaptable',
  ];

  constructor() { }

  ngOnInit() {
  }

}
