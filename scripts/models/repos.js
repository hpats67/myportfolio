(function(module) {
  var reposObj = {};

  reposObj.reqRepos = function(callback) {
    $.ajax({
      url: '/github/users/hpats67/repos',
      method: 'GET',
      success: successHandler,
    });

    function successHandler(data) {
      reposObj.allRepos = data;
      callback();
    };
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
