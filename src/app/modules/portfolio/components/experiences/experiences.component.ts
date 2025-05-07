import { Component, signal } from '@angular/core';

// Inteface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Frontend Developer",
        p: "Capgemini Brasil | Mail 2021 - Present",
      },
      text: "I am a Frontend Developer with experience in building web applications using Angular, React, and Vue.js. I have a strong understanding of HTML, CSS, and JavaScript, and I am always eager to learn new technologies and frameworks. I have worked on various projects, including e-commerce websites, content management systems, and single-page applications. I am proficient in using version control systems like Git and have experience working in Agile environments. I am passionate about creating user-friendly interfaces and ensuring a seamless user experience.",
    },
    {
      summary: {
        strong: "Frontend Developer",
        p: "Capgemini Brasil | Mail 2021 - Present",
      },
      text: "I am a Frontend Developer with experience in building web applications using Angular, React, and Vue.js. I have a strong understanding of HTML, CSS, and JavaScript, and I am always eager to learn new technologies and frameworks. I have worked on various projects, including e-commerce websites, content management systems, and single-page applications. I am proficient in using version control systems like Git and have experience working in Agile environments. I am passionate about creating user-friendly interfaces and ensuring a seamless user experience.",
    },
    {
      summary: {
        strong: "Frontend Developer",
        p: "Capgemini Brasil | Mail 2021 - Present",
      },
      text: "I am a Frontend Developer with experience in building web applications using Angular, React, and Vue.js. I have a strong understanding of HTML, CSS, and JavaScript, and I am always eager to learn new technologies and frameworks. I have worked on various projects, including e-commerce websites, content management systems, and single-page applications. I am proficient in using version control systems like Git and have experience working in Agile environments. I am passionate about creating user-friendly interfaces and ensuring a seamless user experience.",
    }
  ]);
}
