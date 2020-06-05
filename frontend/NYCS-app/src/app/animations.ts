import { trigger, transition, style, animate, state } from '@angular/animations';

export const animations = {
    opacity: () => [
        trigger('opacity', [
            state('void', style({ opacity: '0'})),
            transition(':enter', [
            animate(300)
            ])
        ])
    ]
}
