import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la redirección

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {} // Inyecta el servicio Router

  items = [
    { label: 'Cerrar Sesión', icon: 'pi pi-sign-out', command: () => this.logOut() }
  ];

  logOut() {
    // Lógica para cerrar sesión
    console.log('Cerrando sesión');
    
    // Aquí eliminas el token o la información del usuario (depende de cómo manejes la autenticación)
    localStorage.removeItem('authToken'); // O sessionStorage si usas sesión
    localStorage.removeItem('user'); // Si tienes algún dato de usuario guardado

    // Redirige a la página de inicio de sesión u otra página deseada
    this.router.navigate(['/login']); // Ajusta la ruta según tu aplicación
  }

  navigateHome() {
    this.router.navigate(['/home']); // Navega a la ruta de home
  }
}
