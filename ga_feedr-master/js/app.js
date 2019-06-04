/*
  Please add all Javascript code to this file.
*/
$(document).ready(function() {

  console.log('loaded up')
  $('.btn').click(function(){

      $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
          console.log(results);
          results.data.feed.forEach(function(result){
            $("ul").append("<li>"+result.content.title+"</li>")
          })
        })
      

})