Experience.all = [];

function Experience (opts) {
  for (keys in opts) {
    this[keys] = opts [keys];
  }
};

Experience.prototype.toHtml = function() {
  var source = $('#experience-template').html();
  var template = Handlebars.compile(source);

  return template(this);;
};

Experience.loadAll = function(dataPassedIn) {
  dataPassedIn.forEach(function(ele) {
    experiences.push(new Experience(ele));
  });
};

Experience.fetchAll = function () {
  if (localStorage.experiencefill){
    Experience.loadAll(JSON.parse(local.experiencefill));
  } else {
    $.ajax('data/experiencefill.json', {
      method:'GET',
      success: successHandler,
      error: errorHandler,
    });
    function successHandler(data) {
      Experience.loadAll(data);
      articleView.renderIndexPage();
      local.Storage.setItem('experience fill', JSON.stringify(data));
    };
    function errorHandler(error) {
      console.log('ERROR', error);
    };
  };
};
