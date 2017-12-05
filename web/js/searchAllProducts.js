//main typeahead function
$( function() {
    $('#typeahead').typeahead({
        limit: 15,
        updater: function(result) {
            

            searchDetailItem(result);
            return result;
        },
        source: function(query, process) {
            products=[];
            map={};

            $.ajax( {
                url: '/api/Search?',
                type: 'GET',
                data: 'product=' + query,
                dataType: 'JSON',
                async: true,
                success: function(data) {
                    var temp = JSON.parse(data);
                    //console.log(temp.products[0].id);
                    //console.log("Product list length " + temp.products.length);
                    var results = [];
                    $.map(temp.products, function(product) {
                        var item = {
                            "name" : product.name,
                            "id" : product.id
                        };
                        console.log(item.id);
                        //results.push(product.name);
                        results.push(item.name);
                    });

                    console.log("result size: " + results.length);
                    process(results);
                }
            });   
        }
    });
}); 