import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksRoute extends Route {
  @service store;
  async model() {
    const book = await this.store.findAll('book');
    return book;
  }
}
