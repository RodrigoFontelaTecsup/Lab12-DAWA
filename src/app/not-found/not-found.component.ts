// not-found.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-md-6 text-center">
          <h1 class="display-4">404 - Página no encontrada</h1>
          <p class="lead">Lo sentimos, la página que buscas no existe.</p>
          <a routerLink="/" class="btn btn-primary">Ir a la Página de Inicio</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .vh-100 {
      min-height: 100vh;
    }
  `],
})
export class NotFoundComponent { }
