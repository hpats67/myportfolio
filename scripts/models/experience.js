function Experience (opts) {
  for (keys in opts) {
    this[keys] = opts [keys];
  }
};

Experience.all = [];

Experience.prototype.toHtml = function(scriptTemplateId) {
  var template = Handlebars.compile($(scriptTemplateId).text());
  return template(this);;
};

Experience.loadAll = function(dataPassedIn) {
<<<<<<< HEAD
  dataPassedIn.forEach(function(ele) {
    Experience.all.push(new Experience(ele));
=======
  Experience.all = dataPassedIn.map(function (ele) {
    return new Experience(ele);
>>>>>>> 6e6de02a57c1ae744b92609953ec51989f591f61
  });
};

Experience.fetchAll = function () {
  if (localStorage.experienceFill){
    var jsData = JSON.parse(localStorage.experienceFill);
    Experience.loadAll(jsData);
  } else {
    $.ajax('data/experienceFill.json', {
      method:'GET',
      success: successHandler,
      error: errorHandler,
    });
    function successHandler(data) {
      console.log('success');
      Experience.loadAll(data);
      articleView.renderIndexPage();
      console.log(Experience.all);
      var dataString = JSON.stringify(data);
      localStorage.setItem('experience fill', dataString);
    };
    function errorHandler(error) {
      console.log('ERROR', error);
    };
  };
};
