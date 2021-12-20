import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookRoute extends Route {
    @service store;

    async model(params) {
        const { book_id } = params;
        const books = await this.store.findAll('book');
        const book = books.find(({ id }) => id === book_id);

        return book;
    }

}
