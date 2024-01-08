import { Component } from '@angular/core';

interface Project {
  title: string;
  image: string;
  description: string;
  tools: string;
  id: string;
  link: string;
  website: string;
}

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent {
  public projects: Project[] = [
    {
      title: "Padi's Kitchen Delight",
      image: '/assets/img/padiLogo.jpg',
      description:
        'A local catering business residing in Middleburg, Mpumalanga. Established 2020. 100 Emplopyess',
      tools: 'HTML  CSS  JS  PHP  SQL',
      id: '1',
      link: 'https://github.com/Laoditius-M/Padi-s-Kitchen-Delight-Website',
      website: 'https://ephemeral-phoenix-6af333.netlify.app/',
    },
    {
      title: 'Florence Palms Resort',
      image: '/assets/img/florencelogo.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit',
      tools: 'HTML CSS JS PHP SQL',
      id: '2',
      link: 'https://github.com/Laoditius-M/Florence-Palm-Resort-Website',
      website: 'https://ephemeral-phoenix-6af333.netlify.app/',
    },
  ];

  constructor() {}
}
