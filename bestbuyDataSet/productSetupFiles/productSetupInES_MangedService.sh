#cat ../input/products.json | jq -c '.[] | {"index": {}}, .' > ../output/allProductsFormatted.json
curl -u elastic:p6vwsbvZ1iEjdcFN0L1P4rif -XDELETE https://9060ae123bf5fefb4ba6d250c52fe8e7.us-central1.gcp.cloud.es.io:9243/productlist
curl -u elastic:p6vwsbvZ1iEjdcFN0L1P4rif -XPOST https://9060ae123bf5fefb4ba6d250c52fe8e7.us-central1.gcp.cloud.es.io:9243/productlist/product -d @productMapping.json
curl -u elastic:p6vwsbvZ1iEjdcFN0L1P4rif -XPOST https://9060ae123bf5fefb4ba6d250c52fe8e7.us-central1.gcp.cloud.es.io:9243/productlist/product/_bulk?pretty  -H 'Content-Type: application/json' --data-binary @../output/allProductsFormatted.json

#CURL -XPOST http://localhost:9200/productlist/product -d @productMapping.json
#curl -XPOST http://localhost:9200/productlist/product/_bulk?pretty -H 'Content-Type: application/json' --data-binary @../output/allProductsFormatted.json
