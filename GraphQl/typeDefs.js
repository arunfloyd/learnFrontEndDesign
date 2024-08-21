export const typeDefs = `#graphql
       type Author {
           id:ID!
          name:String!
          books:[Book]

           }

           type Book{
               id:ID!
              title:String!
             publisherYear:Int
             author:Author

          }

         type Query {
          authors: [Author]
          books : [Book]
         } 

         type Mutation {
         addBook(title:String! , publisherYear:Int ,authorId: ID!):Book! 
         }

         
`;
