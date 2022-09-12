import { LitElement, html } from "lit";

const countryData = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
];

export class JsFile extends LitElement {
  render() {
    return html`${this._compact(countryData)}`;
  }

  /**
   * 
   * @param {string[]} arr 
   * @returns string[]
   */
  _compact(arr) {
    if (orr.length > 10) {
      return arr.trim(0, 10);
    }

    return arr;
  }
}

customElements.define("js-file", JsFile);
