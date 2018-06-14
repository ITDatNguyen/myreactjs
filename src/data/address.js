export default class data {
        getApi(){
            return window.fetch(`http://onesystemadmin.azurewebsites.net/api/area`)
                .then(res => res.json())
                .then(data => data.model)
        }
        delApi(id){
                return window.fetch(`http://onesystemadmin.azurewebsites.net/api/area/${id}`,{
                        method:'DELETE',
                })
                    .then(res => res.json())
                    .then(data => data.model)
        }
 }
