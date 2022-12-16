# Semantic Versioning

## "date-format": "^4.0.14"

major.minor.patch => semantic versioning

- patch means fixing bug like 1.0.0 -> 1.0.1 -> 1.0.2
- minor means adding new feature like 1.0.2 -> 1.1.0
- major means adding some changes so old features wont work -> 2.0.0

# To install the very latest minor update

```bash
    npm install react@^13.0.2
    npm install react@13.x
```
# To install the very latest patch update

```bash
    npm install react@~13.0.1
    npm install react@13.0.x
```

## The formar and latter could also work updating the dependecy list and installing by npm install in cmd after deleting the existing node module folder