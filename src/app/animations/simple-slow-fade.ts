import { trigger, transition, style, query, animate } from '@angular/animations';

export const simpleFadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [
      style({ position: 'absolute', top: 0, left: 0, width: '100%', opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      style({ position: 'absolute', top: 0, left: 0, width: '100%', opacity: 1 }),
      animate('0.3s', style({ opacity: 0 }))
    ], { optional: true }),
    query(':enter', [
      animate('0.3s', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);
