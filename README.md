# Babbel Coding Assessment

## Installation

```sh
  git clone https://github.com/lucas1richard/babbel-challenge.git
  cd babbel-challenge
  npm install
```
**Start the app**
```sh
  npm start
```
**Test the app**
```sh
  npm test
```


## More features to add

Given more time, I would like to add:

- the ability to chain operations in such a way that the equals button is not needed to be pressed between every operation.

- a decimal button so that a user could enter numbers that are not integers.

- operate on strings rather than numbers so that the calculator can work with very large numbers:
`'123' + '456' = '579'`

## Further testing

Given more time, I would write more tests to ensure the functionality of each component of the UI. I would also use snapshot testing to make sure only intended UI changes occur in future releases. There is some more setup needed to properly test styled-components.
