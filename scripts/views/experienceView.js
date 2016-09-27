var articleView = {};

articleView.handleNav = function() {
  $('.top-nav').on('click', '.tab', function(event){
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.top-nav .tab:first').click();
};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var position, company, optionTag;
    position = $(this).find('h1').text();
    optionTag = '<option value="' + position + '">' + position + '</option>';
    $('#position-filter').append(optionTag);

    company = $(this).find('h2 a').text();
    optionTag = '<option value="' + company + '">' + company + '</option>';
    $('#company-filter').append(optionTag);
  });
};

articleView.positionFilter = function() {
  $('#position-filter').on('change', function() {
    var position = $(this).val();
    if(position) {
      var $experiences = $('#experiences article');
      $experiences.hide();
      $('article[data-position="' + position + '"]').fadeIn();
    }else {
      $('#experiences article').not('.template').fadeIn();
    };
    $('#company-filter').val('');
  });
};

articleView.companyFilter = function() {
  $('#company-filter').on('change', function(){
    var company = $(this).val();
    if(company) {
      var $experiences = $('#experiences article');
      $experiences.hide();
      $('article[data-company="' + company + '"]').fadeIn();
    }else {
      $('#experiences article').not('.template').fadeIn();
    };
    $('#position-filter').val('');
  });
};

articleView.setTeasers = function() {
  $('.description *:nth-of-type(n+2)').hide();
  $('.read-more').on('click', function(event) {
    event.preventDefault();
    var $selection = $(this).parent();
    if($(this).text() === 'Read More →') {
      $selection.find('p').show();
      $(this).html('Read Less ←');
    } else {
      $selection.find('.description p:nth-of-type(n+2)').hide();
      $(this).html('Read More →');
    };
  });
};

articleView.renderIndexPage = function() {
  Experience.all.forEach(function(a){
    $('#experiences').append(a.toHtml('#experience-template'));
  });
  articleView.handleNav();
  articleView.populateFilters();
  articleView.positionFilter();
  articleView.companyFilter();
  articleView.setTeasers();
};

Experience.fetchAll();
articleView.renderIndexPage();
