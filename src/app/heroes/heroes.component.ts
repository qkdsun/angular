import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
	selector: 'app-heroes', // 组件选择器 （css元素选择器）
	templateUrl: './heroes.component.html', // 组件模板位置
	styleUrls: ['./heroes.component.css']  // 组件私有样式
})
export class HeroesComponent implements OnInit {

    constructor(private heroService: HeroService) { }


    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    heroes: Hero[];
    selectedHero: Hero;
    
    inputtext: '45646';

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    
    // void 无返回值
    buttonClick() : void{
        alert(4546)
    }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    ngOnInit() { // 生命周期钩子
        this.getHeroes();
        
    }

}
