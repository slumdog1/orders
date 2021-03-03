# Pizza delivery service
This service implements async queueing and pipeline pattern using in memory event.

## Used in this projects
- EventEmitter
- async queue
- express 
- pipeline pattern

## Install
```
npm i
```

## Run
```
npm run debug
```

## Example api call
POST
http://localhost:3000/api/v1/order
```
{
    "order": {
        "pizzas": [
            {
                "name": "PizzaTuna",
                "toppings": [
                    "Olives",
                    "Tuna"
                ]
            },
            {
                "name": "PizzaOlive",
                "toppings": [
                    "Tomatos",
                    "Olives"
                ]
            },
            {
                "name": "PizzaZi",
                "toppings": [
                    "Tomatos",
                    "Olives"
                ]
            }
        ],
        "name": "Eliran"
    }
}
```