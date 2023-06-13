class CustomElement extends HTMLElement {
  //Constructor is called when creating the element  
  constructor() {
      // Always call super first in constructor
      super();
      const word = this.getAttribute('word');
      const shadow = this.attachShadow({mode:"open"});
      const wrapper = document.createElement('h1');
      wrapper.textContent = `Hello `+ word;
      shadow.appendChild(wrapper);
    };
    
  }

customElements.define("custom-element", CustomElement);
  