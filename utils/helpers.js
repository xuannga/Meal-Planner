module.exports = {
  format_date: (date)=> {
    return require('moment')(date).format('YYYY-MM-DD');
  },
ifCond: function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
}

};