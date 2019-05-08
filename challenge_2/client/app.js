$(document).ready(function() {
  

$('#submit').on('click', function() {
  event.preventDefault();
  var body = document.getElementById('form').value;
  $.ajax({
    type: 'POST',
    url: '/upload_json',
    data: body,
    success: function(response) {
      console.log(response);
    }
  })
});

// const tableRender = function(string) {
// let renderedTable = `
// <table>
//   <thead>
//     <tr>
//       <th colspan="6">Sales Report</th>
//     </tr>
//   </thead>
//   <tbody>
//     // <tr>
//     //   <td>First Name</td>
//     //   <td>Last Name</td>
//     //   <td>County</td>
//     //   <td>City</td>
//     //   <td>Role</td>
//     //   <td>Sales</td>
//     // </tr>`
  
//    string = string.split(',');
//    let counter = 0;
//     for (var i = 0; i < string.length; i++) {
//       if (counter !== 6) {
//         renderedTable += `${string[i]}`
//         counter++;
//       }
//       else 
//     }
  
  
//     `</tbody>
//   </table>
//   <form method="POST" action="/upload_json">
//   <input type="text">
//   <input type="submit">
//   </form>`
// }

})