import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto003';
  value1: string = `../../assets/images/1.jpg`;
  value2: string = `../../assets/images/2.jpg`;
  value3: string = `../../assets/images/3.jpg`;

  sendValue() {
    const val1 = this.calc();
    const val2 = this.calc();
    const val3 = this.calc();
    this.value1 = `../../assets/images/${val1}.jpg`;
    this.value2 = `../../assets/images/${val2}.jpg`;
    this.value3 = `../../assets/images/${val3}.jpg`;
    if(val1===val2 && val1===val3){
      Swal.fire({
        title: 'Genial',
        text: 'Ganaste felicitaciones',
        imageUrl: 'https://media.istockphoto.com/vectors/you-won-the-banner-text-lettering-against-a-blue-comic-background-vector-id1197615689?k=20&m=1197615689&s=170667a&w=0&h=coZzPor6zLM5tlC27rlSl--siu8QENDzlvRDEzvG814=',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
  }

  calc() {
    return Math.trunc(Math.random()*6) +1;
  }
}
