import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  conferences = [
    {
      id: 1,
      category: 'Cloud & ingénierie',
      title: 'Cloud Native & DevOps',
      picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85',
      adress: 'Cité de la Culture, Tunis',
      date: new Date('2026-12-10T09:00:00'),
      available_Places: 45,
      description: 'Les architectures, outils et pratiques qui accélèrent la mise en production.',
    },
    {
      id: 2,
      category: 'Cybersécurité',
      title: 'Security by Design',
      picture: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
      adress: 'ESPRIT, Ariana',
      date: new Date('2026-12-18T14:00:00'),
      available_Places: 8,
      description: 'Anticipez les menaces et intégrez la sécurité à chaque étape de vos projets.',
    },
    {
      id: 3,
      category: 'Intelligence artificielle',
      title: 'IA en action',
      picture: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=85',
      adress: 'Palais des congrès, Sousse',
      date: new Date('2027-01-08T10:00:00'),
      available_Places: 0,
      description: 'Des cas d’usage concrets pour transformer les métiers avec l’intelligence artificielle.',
    },
  ];
}
