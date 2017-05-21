/* Same as window load */
$m=jQuery.noConflict(); // To replace $ with user defined variable name
$m(document).ready(function(){
 
 /* Show/Hide button */
  $m('#shwBtn').click(function(){
  	$m('p').hide();    
  });
  $m('#disBtn').click(function(){
  	if(!$m('.txt').attr('disabled'))
      $m('.txt').attr('disabled',true);
    else
      $m('.txt').attr('disabled',false);
  });
  
});