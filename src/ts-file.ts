import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

type Status = "completed" | "pending";

import { country, TsfileInterface } from "./utils";

@customElement("ts-file")
export class TsFile extends LitElement implements TsfileInterface {
  @property({ type: String })
  enum: Status = "completed";

  protected render(): unknown {
    return html`${this._compact(country)}`;
  }

  sum(a, b) {
    return a + b;
  };

  _compact(arr: string[]) {
    if (arr.length > 10) {
      return arr.slice(0, 10);
    }

    return arr;
  }
}
