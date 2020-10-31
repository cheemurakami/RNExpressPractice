// Controller could be like this?

// import User from "./User";

// class TaskController {
//   index() {
//     new User({id: 1}).fetch({withRelated: ['tasks']}).then((user) => {
//       console.log(user.related('posts').toJSON())
//     }).catch((error) => {
//       console.error(error)
//     })
//   }
// }