/**
* heimu tag
*
* Syntax:
*   {% heimu content %}
*/

hexo.extend.tag.register('heimu', function(args) {
  var content = args.join(' ');

  var result = '<span style="background-color:#252525 !important;color:#252525 !important" title="你知道的太多了">';
  result += content;
  result += '</span>';
  return result;
});