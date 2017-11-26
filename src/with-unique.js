// @flow

import { generateName } from './util/with-unique.js';

export const withUnique = (Base: Class<any> = HTMLElement): Class<any> => {
  class Elem extends Base {
    static _is: string;
    static get is() {
      return this.hasOwnProperty('_is')
        ? this._is
        : (this._is = generateName(this));
    }
    static set is(is: string) {
      this._is = is;
    }
    static defined() {}
  }
  customElements.whenDefined(Elem.is).then(() => Elem.defined());
  return Elem;
};
