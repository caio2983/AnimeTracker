import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  search!: string;

  constructor(private router: Router) {}

  searchAnimes() {
    console.log('Valor do campo de busca:', this.search);
    if (this.search) {
      this.router.navigate(['/animes', this.search]);
    } else {
      console.warn('O campo de busca está vazio');
    }
  }
}
