(function(module) {
  var repoView = {};

  var repoCompiler = function(repo) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(repo);
  };

  repoView.renderRepos = function() {
    $('#portfolio ul').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  reposObj.reqRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
