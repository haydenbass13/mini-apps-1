/*
HIGH LEVEL:
submit JSON data to server
receive response containing CSV formatted result
CLIENT SIDE MAY USE JQUERY


BREAKDOWN:
  -JSON Data to server should be done using an HTML form
    --single textarea and a submit button
    --'click' submit ->
      --POST request the form data to server
      --DONT USE JQUERY/AJAX for form submission 

  -RESPONSE:
    --CSV report
      --form should remain active for mor form submissions
        --render the report on the page with the form
      


*/

