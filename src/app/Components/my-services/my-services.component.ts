import { Component, OnInit } from '@angular/core';

interface Services {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css'],
})
export class ServicesComponent implements OnInit {
  public services: Services[] = [
    {
      name: 'UI Design',
      image: '/assets/img/ux.png',
      description:
        'We design all types of websites. Minimilistic designs, customized designes, animated websites designs, and so much more. Simplicity is KEY.',
    },
    {
      name: 'Web Dev',
      image: '/assets/img/coding.png',
      description:
        'With design comes development. We develop single page webpages, e-commerce webpages, educational webpages and blogs.',
    },
    {
      name: 'Front End Dev',
      image: '/assets/img/html.png',
      description:
        'Are you feeling the need to learn HTML and CSS, well I got you covered. We offer extensive HTML and CSS tutorials you can use to learn.',
    },
    {
      name: 'Back End Dev',
      image: '/assets/img/css-3.png',
      description:
        'Are you feeling the need to learn CSS, well I got you covered. We offer extensive HTML and CSS tutorials you can use to learn.',
    },
    {
      name: 'C# Tutoring',
      image: '/assets/img/c-sharp.png',
      description:
        'C# is a powerful language. We have developed an easy to follow and understand course that will help you learn C# in a short period of time.',
    },
    {
      name: 'Video Editing',
      image: '/assets/img/film-editing.png',
      description:
        'Are you in need of an amazingily edited video. Are you need of effects that can add that "WOW" factor in Your videos? Well, good news for you.',
    },
    {
      name: 'Photo Editing',
      image: '/assets/img/image-editing.png',
      description:
        'Need to make you photos look stunning? We got you covered. With the photo editing software at our disposal, we can edit any photo to your deepest desire.',
    },
    {
      name: 'Logo Design',
      image: '/assets/img/logo-design.png',
      description:
        'Need to make you photos look stunning? We got you covered. With the photo editing software at our disposal, we can edit any photo to your deepest desire.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
