// ---------- ORDER ---------
// https://github.com/hudochenkov/stylelint-order
// -----------------------------
module.exports = {
  'order/order': [
    [
      {
        type: 'at-rule',
        name: 'use'
      },
      {
        type: 'at-rule',
        name: 'import'
      },
      'custom-properties',
      'dollar-variables',
      'declarations',
      'rules'
    ]
  ],
  'order/properties-order': [
    [
      {
        groupName: 'display',
        emptyLineBefore: 'threshold',
        noEmptyLineBetween: true,
        properties: [
          'display',
          'float',
          'flex-flow',
          'flex-wrap',
          'flex-grow',
          'flex-basis',
          'flex-shrink',
          'flex-direction',
          'align-self',
          'align-items',
          'justify-items',
          'place-content',
          'align-content',
          'justify-content',
          'gap',
          'align-self',
          'place-self',
          'justify-self',
          'grid',
          'grid-gap',
          'grid-auto-rows',
          'grid-auto-flow',
          'grid-auto-columns',
          'grid-row',
          'grid-row-start',
          'grid-row-end',
          'grid-column',
          'grid-column-start',
          'grid-column-end',
          'grid-template',
          'grid-template-rows',
          'grid-template-columns',
          'grid-template-areas'
        ]
      },
      {
        groupName: 'dimensions',
        emptyLineBefore: 'threshold',
        noEmptyLineBetween: true,
        properties: [
          'width',
          'height',
          'min-width',
          'max-width',
          'min-height',
          'max-height'
        ]
      },
      {
        groupName: 'position',
        emptyLineBefore: 'threshold',
        noEmptyLineBetween: true,
        properties: [
          'position',
          'top',
          'left',
          'right',
          'bottom'
        ]
      },
      {
        groupName: 'separators',
        noEmptyLineBetween: true,
        properties: [
          'margin',
          'margin-top',
          'margin-left',
          'margin-right',
          'margin-bottom',
          'padding',
          'padding-top',
          'padding-left',
          'padding-right',
          'padding-bottom'
        ]
      },
      {
        groupName: 'border',
        noEmptyLineBetween: true,
        properties: [
          'border',
          'border-spacing',
          'border-collapse',
          'border-width',
          'border-style',
          'border-color',
          'border-top',
          'border-top-width',
          'border-top-style',
          'border-top-color',
          'border-right',
          'border-right-width',
          'border-right-style',
          'border-right-color',
          'border-bottom',
          'border-bottom-width',
          'border-bottom-style',
          'border-bottom-color',
          'border-left',
          'border-left-width',
          'border-left-style',
          'border-left-color',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'border-top-image',
          'border-right-image',
          'border-bottom-image',
          'border-left-image',
          'border-corner-image',
          'border-top-left-image',
          'border-top-right-image',
          'border-bottom-right-image',
          'border-bottom-left-image',
          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset'
        ]
      },
      {
        groupName: 'background',
        noEmptyLineBetween: true,
        properties: [
          'background',
          'background-size',
          'background-clip',
          'background-color',
          'background-image',
          'background-origin',
          'background-repeat',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-attachment',
          'background-blend-mode'
        ]
      },
      {
        groupName: 'font',
        noEmptyLineBetween: true,
        properties: [
          'color',
          'font',
          'font-family',
          'font-size',
          'font-size-adjust',
          'font-style',
          'font-stretch',
          'font-weight',
          'font-variant',
          'font-kerning',
          'font-variant-caps',
          'line-height',
          'letter-spacing',
          'hyphens',
          'quotes',
          'counter-increment',
          'counter-reset',
          'text-align',
          'text-indent',
          'text-shadow',
          'text-justify',
          'text-overflow',
          'text-transform',
          'text-decoration',
          'text-decoration-line',
          'text-decoration-color',
          'text-decoration-style',
          'word-wrap',
          'word-break',
          'word-spacing',
          '-webkit-text-fill-color',
          '-webkit-text-stroke-color',
          '-webkit-text-stroke-width'
        ]
      },
      {
        groupName: 'modifiers',
        noEmptyLineBetween: true,
        properties: [
          'cursor',
          'opacity',
          'content',
          'filter',
          'visibility',
          'box-sizing',
          'box-shadow',
          'user-select',
          'pointer-events',
          'overflow',
          'overflow-x',
          'overflow-y',
          'transform',
          'transform-style',
          'transform-origin',
          'transition',
          'transition-delay',
          'transition-duration',
          'transition-property',
          'transition-timing-function',
          'scroll-behavior',
          'backface-visibility',
          'box-decoration-break'
        ]
      },
      {
        groupName: 'animation',
        noEmptyLineBetween: true,
        properties: [
          'animation',
          'animation-name',
          'animation-delay',
          'animation-duration',
          'animation-direction',
          'animation-fill-mode',
          'animation-play-state',
          'animation-iteration-count',
          'animation-timing-function'
        ]
      },
      {
        groupName: 'zIndex',
        emptyLineBefore: 'always',
        properties: [
          'z-index'
        ]
      }
    ],
    {
      disableFix: false,
      unspecified: 'ignore',
      emptyLineBeforeUnspecified: 'threshold',
      emptyLineMinimumPropertyThreshold: 7
    }
  ]
}
