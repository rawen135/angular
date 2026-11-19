import { Component } from '@angular/core';
import { Header } from './shared/header/header';
import { Home } from './pages/home/home';
import { Footer } from './shared/footer/footer';

@Component({
  imports: [Home, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
