import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, eventos) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como argumento padrão
    // de eventos caso o usuário não defina
    if (eventos === undefined) {
      this.eventos = ["touchstart", "click"];
    } else {
      this.eventos = eventos;
    }
    this.activeClass = "active";

    // bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdownMenu e adiciona a
  // função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.eventos, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.eventos.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
