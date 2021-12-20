import JSONAPIAdapter from '@ember-data/adapter/json-api';
import RESTAdapter from '@ember-data/adapter/rest';
export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api';
  buildURL(...args) {

    return `http://localhost:8000${super.buildURL(...args)}?format=json`;
  }
}