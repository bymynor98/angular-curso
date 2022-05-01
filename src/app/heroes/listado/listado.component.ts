import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'IronMan','Hulk','Thor'];
  heroeB: string = '';
  
  borrarHeroe():void{

    this.heroeB = this.heroes.shift() || '';
    
    console.log('Borrando.....',this.heroeB);
  }
}
