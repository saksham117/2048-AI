function Control() {
  this.tileContainer    = document.getElementsByClassName("tile-container")[0];
  this.scoreContainer   = document.getElementsByClassName("score-container")[0];
  this.messageContainer = document.getElementsByClassName("game-message")[0];
  this.score = 0;
}

Control.prototype.actuate = function (grid, metadata) {
  var self = this;

  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);

    grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell);
        }
      });
    });

    self.updateScore(metadata.score);

    if (metadata.over) self.message(false); // You lose condition
    if (metadata.won) self.message(true); // You win! condition 
  });
};


Control.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

Control.prototype.addTile = function (tile) {
  var self = this;

  var element   = document.createElement("div");
  var position  = tile.previousPosition || { x: tile.x, y: tile.y };
  positionClass = this.positionClass(position);

  
  var classes = ["tile", "tile-" + tile.value, positionClass];
  this.applyClasses(element, classes);

  element.textContent = tile.value;

  if (tile.previousPosition) {
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(element, classes); // Update the position of the tile
    });
  } else if (tile.mergedFrom) {
    classes.push("tile-merged");
    this.applyClasses(element, classes);

    // Render the tiles that have been merged
    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged);
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(element, classes);
  }

  // Put the tile on the board
  this.tileContainer.appendChild(element);
};

Control.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

Control.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

Control.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

Control.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);

  var difference = score - this.score;
  this.score = score;

  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add("score-addition");
    addition.textContent = "+" + difference;

    this.scoreContainer.appendChild(addition);
  }
};

Control.prototype.message = function (won) {
  var type    = won ? "game-won" : "game-over";
  var message = won ? "You win!" : "Game over!"



  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;

};

Control.prototype.clearMessage = function () {
  this.messageContainer.classList.remove("game-won", "game-over");
};

Control.prototype.showHint = function(hint) {
  document.getElementById('feedback-container').innerHTML = ['↑','→','↓','←'][hint];
}

Control.prototype.setRunButton = function(message) {
  document.getElementById('run-button').innerHTML = message;
}
