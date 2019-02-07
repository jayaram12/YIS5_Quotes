/* Phone NUmber validation */

$(document).ready(function() {
    $('#Phone').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });
    $("#Phone").attr("maxlength", "11");
    $('.editclaim-content .form-group input').blur(function(){
    if( $(this).val() != "" ) {
          $('.editclaim-content .form-group sup').hide();
    }
    else {
      $('.editclaim-content .form-group sup').show();
    }
});


/* data Tables */
$('.datatable').dataTable({
  order: [],
  "paging":   false,
  "info":   false,
  "length":   false,
  columnDefs: [ { orderable: false, targets: [0] } ]
});
$('.claimstable').dataTable({
  "paging":   true,
  "info":   true,
  "length":   true,
});
$('.quoteslisttable').dataTable({
  "paging":   true,
  "info":   true,
  "length":   true,
});
$('.filtertable').dataTable({
  order: [],
  "paging":   false,
  "info":   false,
  "length":   false,
  columnDefs: [ { orderable: false, targets: [0,1,10] } ]
});

/* Tooltip */
$("[data-toggle=tooltip]").tooltip({
  trigger : 'hover'
});

/* Checkbox Hide Show in Add Claim page*/

$('#check').click(function(){
      if ($('#check').is(":checked")) {
          $('#Input').prop('disabled', false);
      } else {
          $('#Input').prop('disabled', true);
      }
});

$('#check2').click(function(){
      if ($('#check2').is(":checked")) {
          $('#Input2').prop('disabled', false);
      } else {
          $('#Input2').prop('disabled', true);
      }
});

$('#check3').click(function(){
      if ($('#check3').is(":checked")) {
          $('#Input3').prop('disabled', false);
      } else {
          $('#Input3').prop('disabled', true);
      }
});

$('#check4').click(function(){
      if ($('#check4').is(":checked")) {
          $('#Input4').prop('disabled', false);
      } else {
          $('#Input4').prop('disabled', true);
      }
});
$('#BillingAddress').hide();
$('#check5').click(function(){
      if ($('#check5').is(":checked")) {
          $('#BillingAddress').slideToggle();
      } else {
          $('#BillingAddress').slideToggle();
      }
});
 $("#ReturnDetails").hide();
 $( ".Returnfunction" ).click(function() {
    if ( $(".sel__box__options:last-child").hasClass( "selected" ) ) {
        $("#ReturnDetails").show('slow');
     }
     else {
      $("#ReturnDetails").hide('slow');
    }
 });

/* Select Dropdown Box */

$('.sel').each(function() {
  $(this).children('select').css('display', 'none');

  var $current = $(this);

  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));

      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));

      return;
    }

    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
  $(this).toggleClass('active');

});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();

  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');

  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});


$('.accountabilitytable').dataTable();



$('.panel-collapse').on('show.bs.collapse', function () {
   $(this).siblings('.panel-heading').addClass('active');
 });

 $('.panel-collapse').on('hide.bs.collapse', function () {
   $(this).siblings('.panel-heading').removeClass('active');
 });

 $('.editable-select').editableSelect({ effects: 'slide' });

$('#creditcards').hide('slow');
$('input[type="radio"]').click(function(){
       var inputValue = $(this).attr("value");
       var targetBox = $("." + inputValue);
       $("#creditcards").not(targetBox).hide('slow');
       $(targetBox).show('slow');
   });


   $("#checked").click(function(){
     if(this.checked){
            $('.check').each(function(){
                this.checked = true;
            });
        }else{
             $('.check').each(function(){
                this.checked = false;
            });
        }
});
$('#WithoutSamples').hide();
$('.QuotewithSamplesForm').hide();
$('.radioclick').click(function(){
      if ($('#withsamples').is(":checked")) {
          $('#WithoutSamples').show('slow');
          $('.QuotewithSamplesForm').show();
      } else {
          $('#WithoutSamples').hide('slow');
          $('.QuotewithSamplesForm').hide();
      }
});
$('.quoteitemstable').DataTable();

$('#SampleTrackingForm').hide();
$('#SampleTracking').click(function(){
    $('#SampleTrackingForm').slideToggle();
});

$('#AddQuoteItemForm').hide();
$('#AddQuoteItem').click(function(){
    $('#AddQuoteItemForm').slideToggle();
});


$('#TableOptionsHeader').hide();
$('.ItemAvailability').hide();
$('.DesignOptions').hide();
$('.SampleOptions').hide();
$('.PriceOptions').hide();
$('.availability').hide();
$('.design').hide();
$('.samples').hide();
$('.negotiation').hide();
$('.quoteitemstable').css('width','100%');

$('#Availability').click(function(){
      if ($(this).is(":checked")) {
          $('.ItemAvailability').show();
          $('.availability').show();
          $('#TableOptionsHeader').show();
      } else {
        $('.ItemAvailability').hide();
        $('.availability').hide();
        $('#TableOptionsHeader').hide();
      }
});

$('#Design').click(function(){
      if ($(this).is(":checked")) {
          $('.DesignOptions').show();
          $('.design').show();
          $('#TableOptionsHeader').show();
      } else {
        $('.DesignOptions').hide();
        $('.design').hide();
        $('#TableOptionsHeader').hide();
      }
});

$('#Samples').click(function(){
      if ($(this).is(":checked")) {
          $('.SampleOptions').show();
          $('.samples').show();
          $('#TableOptionsHeader').show();
      } else {
        $('.SampleOptions').hide();
        $('.samples').hide();
        $('#TableOptionsHeader').hide();
      }
});

$('#Price').click(function(){
      if ($(this).is(":checked")) {
          $('.PriceOptions').show();
          $('.negotiation').show();
          $('#TableOptionsHeader').show();
      } else {
        $('.PriceOptions').hide();
        $('.negotiation').hide();
        $('#TableOptionsHeader').hide();
      }
});

$('#FollowupDate').datetimepicker({
  format: 'MM/DD/YYYY',
  minDate: new Date()
});

$('#ShipDate').datetimepicker({
  format: 'MM/DD/YYYY'
});


/* Widgets Drragable */

        var panelList = $('.DraggableWidgets');
        panelList.sortable({
            handle: '.widget-content',
            update: function() {
                $('.clickhide', panelList).each(function(index, elem) {
                     var $listItem = $(elem),
                         newIndex = $listItem.index();
                });
            }
        });

        /* Add Widgets */

        $('#viewshoworders').hide();
        $('#viewincompleteorders').hide();
        $('#viewweborders').hide();
        $('.view-orders').hide();
        $('.ViewOrders ul li').click(function () {
            var id = $(this).attr('data-related');
            $(".addvieworders").each(function () {
                if ($(this).attr('id') == id) {
                    $('.view-orders').show();
                    $('.Nowidgetstxt').hide();
                    $(this).show();
                    $(this).removeClass('hidden');
                    $('.ViewOrders ul li').attr('data-related').hide();
                }

            });
        });



        $('#problemsbelow15days').hide();
        $('#problemsabove15days').hide();
        $('#paymentsmovedfromA999999').hide();
        $('.general-problem-orders').hide();
        $('.GeneralProblemsOrders ul li').click(function () {
            var id = $(this).attr('data-related');
            $(".addproblems").each(function () {
                if ($(this).attr('id') == id) {
                    $('.general-problem-orders').show();
                    $('.Nowidgetstxt').hide();
                    $(this).show();
                    $(this).removeClass('hidden');
                }
            });
        });


        $('#customerswithprepay').hide();
        $('#customersunder1k').hide();
        $('#customerover1k').hide();
        $('#customersoverpastdue').hide();
        $('.bucketing').hide();
        $('.addwidgets li ul li').click(function () {
            var id = $(this).attr('data-related');
            $(".addbuckets").each(function () {
                if ($(this).attr('id') == id) {
                    $('.bucketing').show();
                    $('.Nowidgetstxt').hide();
                    $(this).show();
                    $(this).removeClass('hidden');
                }
            });
        });

        $('#callstobemadetoday').hide();
        $('.callshide').hide();
        $('.addwidgets li ul li').click(function () {
            var id = $(this).attr('data-related');
            $(".addcalls").each(function () {
                if ($(this).attr('id') == id) {
                    $('.callshide').show();
                    $('.Nowidgetstxt').hide();
                    $(this).show();
                    $(this).removeClass('hidden');
                }
            });
        });

        $('#ordersneedcreditapp').hide();
        $('#creditappsapproved').hide();
        $('#ordersneedcreditcard').hide();
        $('#orderswithduplicateitems').hide();
        $('#orderswithcreditproblem').hide();
        $('#ordershavedifferentterms').hide();
        $('.credit-issues').hide();
        $('.addwidgets li ul li').click(function () {
            var id = $(this).attr('data-related');
            $(".addcreditissues").each(function () {
                if ($(this).attr('id') == id) {
                    $('.credit-issues').show();
                    $('.Nowidgetstxt').hide();
                    $(this).show();
                    $(this).removeClass('hidden');
                }
            });
        });

        $('#keyorders').hide();
        $('#keyaccounts').hide();
        $('.key-units').hide();
        $('.addwidgets li ul li').click(function () {
            var id = $(this).attr('data-related');
            $(".addkeyunits").each(function () {
                if ($(this).attr('id') == id) {
                    $('.key-units').show();
                    $('.Nowidgetstxt').hide();
                    $(this).show();
                    $(this).removeClass('hidden');
                }
            });
        });

        $('#ordersfailedautoschedule').hide();
        $('#ordersover75dollar').hide();
        $('#ordersunder75dollar').hide();
        $('#orderswithoutscheduledate').hide();
        $('.schedule-order-issues').hide();
        $('.addwidgets li ul li').click(function () {
            var id = $(this).attr('data-related');
            $(".addorderissues").each(function () {
                if ($(this).attr('id') == id) {
                    $('.schedule-order-issues').show();
                    $('.Nowidgetstxt').hide();
                    $(this).show();
                    $(this).removeClass('hidden');
                }
            });
        });

        $('#claimreturns').hide();
        $('.claims').hide();
        $('.addwidgets li ul li').click(function () {
            var id = $(this).attr('data-related');
            $(".addclaims").each(function () {
                if ($(this).attr('id') == id) {
                    $('.claims').show();
                    $('.Nowidgetstxt').hide();
                    $(this).show();
                    $(this).removeClass('hidden');
                }
            });
        });


        /*$('.DraggableWidgets .viewincompleteorders').hide();
        $('.ViewOrders ul .viewincompleteorders').click(function () {
          var a = $('.DraggableWidgets .viewincompleteorders');
            if ($(this) == a) {
              $(this).show();
              $('.DraggableWidgets .viewincompleteorders').hide();
            }
            else {
              $(this).hide();
              $('.DraggableWidgets .viewincompleteorders').show();
            }
        });*/

        /* Remove Widgets */

        $('.view-orders .hideclick .fa-times').click(function () {
            debugger
            $(this).parents().eq(2).toggleClass('hidden').fadeOut('slow');
            $('.view-orders .clickhide').each(function () {
                if ($('.view-orders .clickhide.hidden').length == 3) {
                    $('.view-orders').hide();
                }
                else {
                    $('.view-orders').show();
                }
            });
        });
        $('.general-problem-orders .hideclick .fa-times').click(function () {
            $(this).parents().eq(2).toggleClass('hidden').fadeOut('slow');
            $('.general-problem-orders .clickhide').each(function () {
                if ($('.general-problem-orders .clickhide.hidden').length == 3) {
                    $('.general-problem-orders').hide();
                }
                else {
                    $('.general-problem-orders').show();
                }
            });
        })
        $('.bucketing .hideclick .fa-times').click(function () {
            $(this).parents().eq(2).toggleClass('hidden').fadeOut('slow');
            $('.bucketing .clickhide').each(function () {
                if ($('.bucketing .clickhide.hidden').length == 4) {
                    $('.bucketing').hide();
                }
                else {
                    $('.bucketing').show();
                }
            });
        })
        $('.callshide .hideclick .fa-times').click(function () {
            $(this).parents().eq(2).toggleClass('hidden').fadeOut('slow');
            $('.callshide .clickhide').each(function () {
                if ($('.callshide .clickhide.hidden').length == 1) {
                    $('.callshide').hide();
                }
                else {
                    $('.callshide').show();
                }
            });
        })
        $('.credit-issues .hideclick .fa-times').click(function () {
            $(this).parents().eq(2).toggleClass('hidden').fadeOut('slow');
            $('.credit-issues .clickhide').each(function () {
                if ($('.credit-issues .clickhide.hidden').length == 6) {
                    $('.credit-issues').hide();
                }
                else {
                    $('.credit-issues').show();
                }
            });
        })
        $('.key-units .hideclick .fa-times').click(function () {
            $(this).parents().eq(2).toggleClass('hidden').fadeOut('slow');
            $('.key-units .clickhide').each(function () {
                if ($('.key-units .clickhide.hidden').length == 2) {
                    $('.key-units').hide();
                }
                else {
                    $('.key-units').show();
                }
            });
        })
        $('.schedule-order-issues .hideclick .fa-times').click(function () {
            $(this).parents().eq(2).toggleClass('hidden').fadeOut('slow');
            $('.schedule-order-issues .clickhide').each(function () {
                if ($('.schedule-order-issues .clickhide.hidden').length == 4) {
                    $('.schedule-order-issues').hide();
                }
                else {
                    $('.schedule-order-issues').show();
                }
            });
        })

        $('.claims .hideclick .fa-times').click(function () {
            $(this).parents().eq(2).toggleClass('hidden').fadeOut('slow');

            $('.claims .clickhide').each(function () {
                if ($('.claims .clickhide.hidden').length == 1) {
                    $('.claims').hide();
                }
                else {
                    $('.claims').show();
                }
            });


        });

        $('.hideclick .fa-times').click(function () {

        if($('.TotalWidgets').children(':visible').length == 0) {
                $('.Nowidgetstxt').show();
            }
            else {
              $('.Nowidgetstxt').hide();
            }
          });
  });
