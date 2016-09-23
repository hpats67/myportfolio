var experiences = [];

function Experience (opts) {
  this.company     = opts.company; //eslint-disable-line
  this.companyUrl  = this.companyUrl; //eslint-disable-line
  this.position    = opts.position; //eslint-disable-line
  this.date        = opts.date; //eslint-disable-line
  this.skills      = opts.skills; //eslint-disable-line
  this.description = opts.description;
};

Experience.prototype.toHtml = function() {
  var source = $('#experience-template').html();
  var template = Handlebars.compile(source);

  var html = template(this);
  return html;
};

localFill.forEach(function(ele) {
  experiences.push(new Experience(ele));
});

experiences.forEach(function(a) {
  $('#experiences').append(a.toHtml());
});
