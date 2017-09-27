import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://chadcartier-blog.prismic.io/api/v2';
export default (thi$, key, q, type) => {
    
    Prismic.getApi(apiEndpoint)
    .then(api => type === 'single' ? api.getSingle(q) : api.query(Prismic.Predicates.at('document.type', q),
    {orderings : `[my.${q}.date desc]`})
    )
   .then(response => type==='single' ? thi$.setState({[key]: response.data}) : thi$.setState({[key]: response.results}), 
    err => console.log(err));
   
    
}

