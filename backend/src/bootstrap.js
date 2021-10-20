module.exports = async () => {
    const Post = require("./models/Post");
    const User = require("./models/User");
    const Comment = require("./models/Comment")

    User.hasMany(Post, {as: "Post", foreignKey: 'user_id'});
    Post.belongsTo(User, {as: "User", foreignKey: "user_id"});

    // faire de même avec les commentaires

    const errHandler = (err) => {
        console.error("Error: ", err);
    }
        

   const user = await User.create({ 
       email: 'alexia.w@gmail.com', 
       speudo: 'alexiaW'
    })
   .catch(errHandler);

   const post = await Post.create({ 
       content: 'This is a post made by Alexia'
    })
   .catch(errHandler);


};