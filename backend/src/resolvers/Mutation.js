const Mutation = {
  createDog: function (parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    const dog = { name: args.name };
    global.dogs.push(dog);
    return dog;
  },
};

module.exports = Mutation;
