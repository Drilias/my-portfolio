export default{
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        {
           name:"title",
           type:"string",
        },
        {
           name:"description",
           type:"text",
        },
        {
         name:"technologies",
         type:"text",
        },
        {
         name:"githubLink",
         type:"url",
        },
        {
         name:"functionalities",
         type:"text",
        },
        {
           name:"link",
           type:"url",
        },   
        {
           name: 'mainImage',
           type: 'image',         
        },    
    ],
}