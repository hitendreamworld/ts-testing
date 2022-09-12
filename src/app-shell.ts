import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";

import "./ts-file";
import "./js-file.js";

@customElement("app-shell")
export class AppShell extends LitElement {
  static styles?: CSSResultGroup | undefined = [
    css`
      :host {
        display: block;
        min-height: 100vh;
      }

      .container {
        display: flex;
        width: 100%;
        height: 100vh;
      }

      ts-file,
      js-file {
        flex: 1;
        margin: 8px;
        border: 1px solid;
      }
    `,
  ];
  protected render(): unknown {
    return html`
      <div class="container">
        <ts-file></ts-file>
        <js-file></js-file>
      </div>
    `;
  }
}
