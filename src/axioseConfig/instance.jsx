import axios from 'axios';


          const axiosInastance = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    

    params:{
        'api_key' : 'b00c854891c4ad00f18609437aef43eb'
    }






})

export default  axiosInastance;