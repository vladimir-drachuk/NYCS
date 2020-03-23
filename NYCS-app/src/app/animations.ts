import { trigger, transition, style, animate, state } from '@angular/animations';

export const animations = {
    opacity: () => [
        trigger('opacity', [
            state('void', style({ opacity: '0'})),
            transition(':enter', [
            animate(300)
            ])
        ])
    ],
    appear: (value) => [
      trigger('state', [
        state('none', style({ backgroundColor: 'white' })),
        state('color', style({ backgroundColor: 'grey' })),
        transition('none<=>color', animate(1000))
      ]),
      trigger('appear', [
        state('void', style({ opacity: '0' })),
        transition(':enter', animate(value))
      ])
    ]
};
