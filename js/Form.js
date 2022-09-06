class Form {
  constructor() {
    this.titleImg = createImg("./assets/Titulo1.png", "game title");
    this.background = createImg("assets/background.jpg");
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.background.position(windowWidth / 500, height / 400);
    this.titleImg.position(150, 100);
    this.input.position(width / 2 - 225, height / 2 - 100);
    this.playButton.position(width / 2 - 120, height / 2 + 5);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.background.class("background")
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.background.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      this.background.hide();
      var message = `
      Olá ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
