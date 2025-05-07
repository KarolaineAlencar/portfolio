import { Component, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/mario.jpg',
      alt: 'Projeto Super Mario Bros',
      title: 'Super Mario Bros',
      with: '90px',
      height: '100px',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      links: [
        {
          name: 'Conheça mais',
          href: 'https://www.google.com'
        }
      ]
    }
  ])
}
