import JSONAPIAdapter from '@ember-data/adapter/json-api';
export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  buildURL(...args) {
    return `http://localhost:8000${super.buildURL(...args)}`;
  }
}
