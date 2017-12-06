#cat ../input/products.json | jq -c '.[] | {"index": {}}, .' > ../output/allProductsFormatted.json
curl -XDELETE http://35.193.19.18:9200/productlist
curl -XPOST http://35.193.19.18:9200/productlist/product -d @productMapping.json
curl -XPOST http://35.193.19.18:9200/productlist/product/_bulk?pretty  -H 'Content-Type: application/json' --data-binary @../output/allProductsFormatted.json

