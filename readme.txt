This API Provides some basic CRUD operation over the mongoDB

• Basic GET Operations

→ GET all drafts will same user_ID
> /api/op/drafts/all/:user_ID

→ GET details of a specific drafts
> /api/op/drafts/one/:_id

→ GET all BlogPosts will same user_ID
> /api/op/blogs/all/:user_ID

→ GET details of a specific BlogPosts
> /api/op/blogs/One/:_id



• Basic PUT Operations

→ EDIT data of draft by _id
> /api/op/data/draft/:id

→ EDIT data of blogs by _id
> /api/op/data/blogs/:id



• Basic POST Operations

→ creating a new Draft
> /api/op/draft

→ creating a new BlogPost
> /api/op/blogs