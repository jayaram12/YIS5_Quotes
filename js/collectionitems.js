
$(document).ready(function(){

  /* Tooltip */
  $("[data-toggle=tooltip]").tooltip({
    trigger : 'hover'
  });

  $('.collectionitemsdatatable').dataTable({
    "paging":   true,
    "info":   true,
    "length":   true,
  });


  });
