import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private rutaImagen = 'assets/imagen/StyleAndColor.png';
  selectedButton: string | null = null;
  
  getRutaImagen() {
    return this.rutaImagen;
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }

}
