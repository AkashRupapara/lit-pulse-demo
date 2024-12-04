import { LitElement, html, css } from 'lit';

class PulseCircle extends LitElement {
  static styles = css`
    /* Container for the static and pulse elements */
    .pulse-container {
      position: relative;
      width: 100px;
      height: 100px;
    }

    /* Static inner circle */
    .static-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background-color: #3498db;
      border-radius: 50%;
      z-index: 1;
    }

    /* Glowing pulse animation */
    .pulse {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background-color: rgba(52, 152, 219, 0.5); /* Slightly transparent */
      border-radius: 50%;
      animation: pulseGlow 1.5s infinite;
      z-index: 0;
    }

    /* Keyframes for pulse animation */
    @keyframes pulseGlow {
      0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.7;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0.4;
      }
      100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
      }
    }
  `;

  render() {
    return html`
      <div class="pulse-container">
        <div class="static-circle"></div>
        <div class="pulse"></div>
      </div>
    `;
  }
}

customElements.define('pulse-circle', PulseCircle);