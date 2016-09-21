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
  var $newExperience = $('article.template').clone(); $newExperience.attr('data-category', this.category);

  $newExperience.find('header a').attr('href', this.companyUrl);
  $newExperience.find('header a').html(this.company);
  $newExperience.find('h1').attr('title', this.position);
  $newExperience.find('h1').html(this.position);
  $newExperience.find('h2.date').attr('title', this.date);
  $newExperience.find('h2.date').html('Employed from ' + this.date);
  $newExperience.find('skills').attr('title', this.skills);
  $newExperience.find('skills').html('Skills I learned or sharpened: ' + this.skills);
  $newExperience.find('description').attr('title', this.description);
  $newExperience.find('description').html(this.description);

  $newExperience.removeClass('template');
  return $newExperience;
};

localFill.forEach(function(ele) {
  experiences.push(new Experience(ele));
});

experiences.forEach(function(a) {
  $('#experiences').append(a.toHtml());
});
