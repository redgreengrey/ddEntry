const model = [
  {
    id: 0,
    title: 'Title text 1',
    text: 'Some text 1',
    user: {
      id: 0,
      name: 'user 1',
    },
  },
  {
    id: 1,
    title: 'Title text 2',
    text: 'Some text 2',
    user: {
      id: 1,
      name: 'user 2',
    },
  },
  {
    id: 2,
    title: 'Title text 3',
    text: 'Some text 3',
    user: {
      id: 0,
      name: 'user 1',
    },
  },
  {
    id: 3,
    title: 'Title text 4',
    text: 'Some text 4',
    user: {
      id: 2,
      name: 'user 3',
    },
  },
  {
    id: 4,
    title: 'Title text 5',
    text: 'Some text 5',
    user: {
      id: 0,
      name: 'user 1',
    },
  },
]

function groupByUser1(arr) {
  let res = []

  for (let i = 0; i < arr.length; i++) {
    // const { id, title, text, user: currentUser } = arr[i];
    // const existedUser = res.find((u) => u.id === currentUser.id);

    // const post = { id, title, text };

    // if (existedUser) {
    //   existedUser.posts.push(post);
    // } else {
    //   res.push({
    //     ...currentUser,
    //     posts: [post]
    //   });
    // }
    res = cb(res, arr[i])
  }

  return res
}

function cb(users, currentPost) {
  const {id, title, text, user: currentUser} = currentPost
  const user = users.find((u) => u.id === currentUser.id)
  const post = {id, title, text}

  if (user) {
    user.posts.push(post)
  } else {
    users.push({
      ...currentUser,
      posts: [post],
    })
  }

  return users
}

function groupByUser(arr) {
  return arr.reduce(cb, [])
}

console.log(groupByUser1(model))
console.log(groupByUser(model))
