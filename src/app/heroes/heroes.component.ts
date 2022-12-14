import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', //css selector name
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
 
})
export class HeroesComponent implements OnInit {
	
	//hero : Hero = {
	//	id: 1,
	//	name: 'Windstorm'
	//};
	
	
	selectedHero: Hero;
	heroes: Hero[];
	
  constructor(private heroService: HeroService) {}
  
  ngOnInit(){
	  this.getHeroes();
  }
  
  onSelect(hero: Hero): void{
	  this.selectedHero = hero;
  }
  
  getHeroes(): void {
	this.heroes = this.heroService.getHeroes();
  }


}




