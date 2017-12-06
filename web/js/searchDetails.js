$(document).ready(function(){
    $('#card').hide();
});

function searchDetailItem(productName) {
    var decodedProductName = decodeURI(productName);
    
    $.ajax({
        type: "GET",
        url: "/api/SearchDetails?",
        timeout: 2000,
        dataType: 'JSON',
        data: 'productName=' + decodedProductName, 
        success: function(data) {
            var content=data;
            //console.log('content: ' + content);
            //alert('content : ' + content._source.name);
            
            $('#card').show();
            $('#productName').text(content._source.name);
            $('#productPrice').text(content._source.price);
            $('#productDescription').text(content._source.description);
            $('#productImage').attr("src",content._source.image);
            //$('#productImage'.text(content._source.image);
        },
        error: function(jqXHR, textStatus, err) {
            //show error message
            alert('text status '+textStatus+', err '+err)
        }
    });
}
