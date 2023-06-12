class CustomElement extends HTMLElement {
  //Constructor is called when creating the element  
  constructor() {
      // Always call super first in constructor
      super();
      console.log(this.getAttribute('word'));
      const shadow = this.attachShadow({mode:"open"});
      const wrapper = document.createElement('h1');
      wrapper.textContent = `Hello `+ word;
      shadow.appendChild(wrapper);
    };

    connectedCallback() {
      let word = this.getAttribute('word');
    }
    
  }

customElements.define("custom-element", CustomElement);
  