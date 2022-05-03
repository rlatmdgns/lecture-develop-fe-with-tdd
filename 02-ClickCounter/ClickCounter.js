var App = App || {};

//Red
// App.ClickCounter = () => {
//   return {
//     getValue() {},
//   };
// };

//Green
// App.ClickCounter = () => {
//   return {
//     getValue() {
//       return 0;
//     },
//   };
// };

//Refactor
App.ClickCounter = () => {
  let value = 0;
  return {
    getValue() {
      return value;
    },
  };
};
