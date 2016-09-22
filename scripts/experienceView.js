var articleView = {};

articleView.handleNav = function() {
  $('.top-nav').on('click', 'li.tab', function(){
    var tabClickContent = $(this).data('content');
    if (tabClickContent === 'home') {
      $('#experiences').hide();
      $('#portfolio').hide();
      $('#about').hide();
      $('#home').fadeIn();
    } else if (tabClickContent === 'experience') {
      $('#experiences').fadeIn();
      $('#portfolio').hide();
      $('#about').hide();
      $('#home').hide();
    } else if (tabClickContent === 'portfolio') {
      $('#experiences').hide();
      $('#portfolio').fadeIn();
      $('#about').hide();
      $('#home').hide();
    } else if (tabClickContent === 'about') {
      $('#experiences').hide();
      $('#portfolio').hide();
      $('#about').fadeIn();
      $('#home').hide();
    }
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
  $('description *:nth-of-type(n+2)').hide();
  $('.read-more').on('click', function(event) {
    event.preventDefault();
    var $this = $(this);
    var stringArray = $this.html().split(' ');
    if (stringArray[1] === 'More') {
      $('description *:nth-of-type(n+2)').fadeIn();
      $this.html('Read Less &larr;');
    }else {
      $('description *:nth-of-type(n+2)').hide();
      $this.html('Read More &rarr;');
    };
  });
};

articleView.handleNav();
articleView.populateFilters();
articleView.positionFilter();
articleView.companyFilter();
articleView.setTeasers();
