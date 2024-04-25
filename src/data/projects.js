// Import images

import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import Project1 from '../images/pokedex.jpg';
import Project2 from '../images/Quizzical.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'Pokedex-App with PokeAPI',
    category: 'React   TailwindCSS  Vite',
    img: Project1,
    sourceCode: 'https://github.com/Ghaieth1/Pokemon-app',
    livePreview: 'https://pokemon-pokedex1.netlify.app',
  },
  {
    id: 2,
    title: 'Quizz App with Trivia API',
    category: 'React   TailwindCSS   Vite',
    sourceCode: 'https://github.com/Ghaieth1/Quizzical-App',
    livePreview: 'https://quizzical-app1.netlify.app',

    img: Project2,
  },
  {
    id: 3,
    title: 'Project Management UI',
    category: 'UI/UX Design',
    img: UIImage1,
  },
  {
    id: 4,
    title: 'Cloud Storage Platform',
    category: 'UI/UX Design',
    img: UIImage2,
  },
];
