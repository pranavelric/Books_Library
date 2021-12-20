import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
  model() {
    return [
      { title: 'Monkey Adventure' },
      { title: 'Island Strife' },
      { title: 'The Ball' },
      { title: 'Simple Pleasures of the South' },
      { title: 'Big City Monkey' },
    ];
  }
}
