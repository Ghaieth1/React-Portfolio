// Import images

import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import Project1 from '../images/pokedex.jpg';
import Project2 from '../images/Quizzical.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'Pokedex-App with PokeAPI',
    category: 'React  -  TailwindCSS  -  Vite',
    img: Project1,
    sourceCode: 'https://github.com/Ghaieth1/Pokemon-app',
    livePreview: 'https://pokemon-pokedex1.netlify.app',
  },

  {
    id: 2,
    title: 'Fast Food Ordering App',
    category: 'React -  bootstrap  ',
    img: UIImage1,
    sourceCode: 'https://github.com/Ghaieth1/Quizzical-App',
    livePreview: 'https://food-react-app-six.vercel.app/',
  },
  {
    id: 3,
    title: 'Quizz App with Trivia API',
    category: 'React  -  TailwindCSS  -  Vite',
    img: Project2,
    sourceCode: 'https://github.com/Ghaieth1/Food-react-app/tree/main',
    livePreview: 'https://quizzical-app1.netlify.app',
  },
  {
    id: 4,
    title: 'Cloud Storage Platform',
    category: 'UI/UX Design',
    img: UIImage2,
  },
];
