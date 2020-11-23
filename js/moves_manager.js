function MovesManager() {
  this.events = {};

  this.listen();
}

MovesManager.prototype.on = function (event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(callback);
};

MovesManager.prototype.emit = function (event, data) {
  var callbacks = this.events[event];
  if (callbacks) {
    callbacks.forEach(function (callback) {
      callback(data);
    });
  }
};

MovesManager.prototype.listen = function () {
  var self = this;

  var map = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
  };

  document.addEventListener("keydown", function (event) {
    var mapped    = map[event.which];
  
   
      if (mapped !== undefined) {
        event.preventDefault();
        var feedbackContainer  = document.getElementById('feedback-container');
        feedbackContainer.innerHTML = ' ';
        self.emit("move", mapped);
      }

  });

  var hintButton = document.getElementById('hint-button');
  hintButton.addEventListener('click', function(e) {
    e.preventDefault();
    var feedbackContainer  = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = '<img src=img/spinner.gif />';
    self.emit('think');
  });

  var runButton = document.getElementById('run-button');
  runButton.addEventListener('click', function(e) {
    e.preventDefault();
    self.emit('run')
  })

};


