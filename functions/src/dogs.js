export function getDogs(req,res){
    res.send([
        {name: 'Ryder', age: 4, breed: 'Dumbass', gender: 'M'},
        {name: 'Killian', age:5, breed: 'Pitbull', gender: 'M'},
        {name: 'Indigo', age:10, breed: 'Great Dane/ Lab Mix', gender: 'M'}
    
    ])
}

export function testApi(req,res){
    res.send({success: true, message: 'Api is working'})
}