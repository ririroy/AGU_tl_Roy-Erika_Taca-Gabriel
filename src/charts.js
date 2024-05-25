import { Bar } from 'rgraph';

window.onload = function () {
  const data = {
    labels: [
      'Youth (63%)',
      'Adults (49%)',
      'Men (higher)',
      'Women (lower)',
      'Northeast (68%)',
      'South (67%)',
      'West (61%)',
      'Midwest (59%)',
      'Non-Metro (31%)',
      'Metro (25%)',
      'Home (52%)',
      'Outside (48%)'
    ],
    values: [63, 49, 68, 59, 68, 67, 61, 59, 31, 25, 52, 48]
  };

  const bar = new Bar('cvs', data.values)
    .set('labels', data.labels)
    .set('colors', ['#1f77b4'])
    .set('hmargin', 15)
    .set('gutterBottom', 75)
    .set('tooltips', [
      '63% of youth consume sugary drinks daily',
      '49% of adults consume sugary drinks daily',
      'Higher consumption among men',
      'Lower consumption among women',
      '68% of adults in the Northeast drink sugary drinks daily',
      '67% of adults in the South drink sugary drinks daily',
      '61% of adults in the West drink sugary drinks daily',
      '59% of adults in the Midwest drink sugary drinks daily',
      '31% of non-metro adults drink sugary drinks daily',
      '25% of metro adults drink sugary drinks daily',
      '52% of sugary drink calories are consumed at home',
      '48% of sugary drink calories are consumed outside'
    ])
    .set('tooltipsEvent', 'onmousemove')
    .set('tooltipsEffect', 'fade')
    .draw();
};