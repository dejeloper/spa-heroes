import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  heroes: Heroe[] = [];
  busqueda: string = "";

  constructor(
    private _heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.busqueda = params['text'];
      this.heroes = this._heroeService.searchHeroes(this.busqueda);
    });
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
  }

}
