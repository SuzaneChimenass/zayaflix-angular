import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieApiService } from '../../services/movie-api.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

    constructor(
      private service: MovieApiService,
      private router: Router,
      private route: ActivatedRoute
    ) {}

    result: any;
    resultsList: any[] = [];
    searchQuery: string = '';
    currentPage: number = 1;
    totalPages: number = 0;

    ngOnInit(): void {

    }

    onSearch(): void {
      this.currentPage = 1;
      this.resultsList = [];
      // Atualiza a URL com os novos parametros
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { query: this.searchQuery, page: this.currentPage},
        queryParamsHandling: 'merge'
      });
      this.searchMedia();
    }

    searchMedia(): void {
      const query = this.searchQuery.trim();
      if(!query) return;

      this.service.searchMedia(query, this.currentPage).subscribe(result => {
        this.result = result;
        this.totalPages = this.result.total_pages;

        if(this.currentPage === 1) {
          this.resultsList = result.results;
        } else {
          this.resultsList = [...this.resultsList, ...result.results];
        }
      })
    }

    
}
