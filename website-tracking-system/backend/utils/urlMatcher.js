module.exports = function matchURL(url, patterns) {
    return patterns.some(pattern => url.includes(pattern));
  };
  
