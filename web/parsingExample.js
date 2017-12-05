var tempjson=" { \"products\" : [{ \"id\":\"AVzCwdwpdwouO3kSlWTI\", \"name:\"\"Duracell - AA Batteries (8-Pack)\"},{ \"id\":\"AVzCwdwpdwouO3kSlWTK\", \"name:\"\"Duracell - C Batteries (4-Pack)\"},{ \"id\":\"AVzCwdwpdwouO3kSlWTM\", \"name:\"\"Duracell - 9V Batteries (2-Pack)\"},{ \"id\":\"AVzCwdxadwouO3kSlZuX\", \"name:\"\"Duracell - Pro510 Power Bank Portable Charger - Black\"},{ \"id\":\"AVzCwdwpdwouO3kSlWTG\", \"name:\"\"Duracell - AAA Batteries (4-Pack)\"},{ \"id\":\"AVzCwdx7dwouO3kSlfJ1\", \"name:\"\"Duracell - Lightning Vehicle Charger - Black\"},{ \"id\":\"AVzCwdxzdwouO3kSleID\", \"name:\"\"Duracell - AAA Batteries (16-Pack) - Black\"},{ \"id\":\"AVzCwdx7dwouO3kSlfJ7\", \"name:\"\"Duracell - 2600 mAh Portable Power Bank - Red\"},{ \"id\":\"AVzCwdyLdwouO3kSlhXt\", \"name:\"\"Duracell - Quantum AA Batteries (4-Pack) - Red\"},{ \"id\":\"AVzCwdyLdwouO3kSlhXx\", \"name:\"\"Duracell - Quantum AA Batteries (12-Pack) - Red\"}]";

var tempjson2="{ \"products\" : [{ \"id\":\"AVzCwdwpdwouO3kSlWTI\", \"name\":\"Duracell - AA Batteries (8-Pack)\"},{ \"id\":\"AVzCwdwpdwouO3kSlWTK\", \"name\":\"Duracell - C Batteries (4-Pack)\"},{ \"id\":\"AVzCwdwpdwouO3kSlWTM\", \"name\":\"Duracell - 9V Batteries (2-Pack)\"},{ \"id\":\"AVzCwdxadwouO3kSlZuX\", \"name\":\"Duracell - Pro510 Power Bank Portable Charger - Black\"},{ \"id\":\"AVzCwdwpdwouO3kSlWTG\", \"name\":\"Duracell - AAA Batteries (4-Pack)\"},{ \"id\":\"AVzCwdx7dwouO3kSlfJ1\", \"name\":\"Duracell - Lightning Vehicle Charger - Black\"},{ \"id\":\"AVzCwdxzdwouO3kSleID\", \"name\":\"Duracell - AAA Batteries (16-Pack) - Black\"},{ \"id\":\"AVzCwdx7dwouO3kSlfJ7\", \"name\":\"Duracell - 2600 mAh Portable Power Bank - Red\"},{ \"id\":\"AVzCwdyLdwouO3kSlhXt\", \"name\":\"Duracell - Quantum AA Batteries (4-Pack) - Red\"},{ \"id\":\"AVzCwdyLdwouO3kSlhXx\", \"name\":\"Duracell - Quantum AA Batteries (12-Pack) - Red\"} ]}";

console.log("hello");

var temp1 = JSON.stringify(tempjson2);
var temp2 = JSON.parse(tempjson2);
console.log(temp2.products[0].id);

//console.log(temp1);
//console.log(temp2);

