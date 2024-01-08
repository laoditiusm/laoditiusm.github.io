import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  image: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  public skills: Skill[] = [
    {
      name: 'JavaScript',
      image: '/assets/img/ux.png',
    },
    {
      name: 'C#',
      image: '/assets/img/c-sharp.png',
    },
    {
      name: 'Angular',
      image: '/assets/img/film-editing.png',
    },
    {
      name: 'NodeJS',
      image: '/assets/img/image-editing.png',
    },
    {
      name: 'Bootstrap',
      image: '/assets/img/coding.png',
    },
    {
      name: 'HTML',
      image: '/assets/img/html.png',
    },
    {
      name: 'CSS',
      image: '/assets/img/css-3.png',
    },
    {
      name: 'API',
      image: '/assets/img/logo-design.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
