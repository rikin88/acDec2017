#cat ../input/products.json | jq -c '.[] | {"index": {}}, .' > ../output/allProductsFormatted.json

CURL -XDELETE http://localhost:9200/productlist
CURL -XPOST http://localhost:9200/productlist/product -d @productMapping.json
curl -XPOST http://localhost:9200/productlist/product/_bulk?pretty -H 'Content-Type: application/json' --data-binary @../output/allProductsFormatted.json
