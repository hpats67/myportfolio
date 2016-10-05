(function(module) {
  var reposObj = {};

  reposObj.reqRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/hpats67/repos',
      method: 'GET',
      headers: {
        Authorization: 'token ' + token
      },
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
