import axios from 'axios'

const listaproducto = async () =>{
    //https://0323tn-production.up.railway.app/v1/list
    const {data} = await axios.get('https://0323tn-production.up.railway.app/v1/list')
    return data
}

const guardarProdcuto = async (marca, modelo, tipo, precio, descripcion, anio)=>{
    const {data} = await axios.post('https://0323tn-production.up.railway.app/v1/crear',{
        marca,
        modelo,
        tipo,
        precio,
        descripcion,
        anio,
    })
    return data
}

const eliminarProducto = async (id) =>{
    //https://0323tn-production.up.railway.app/v1/list
    const {data} = await axios.delete('https://0323tn-production.up.railway.app/v1/eliminar/' + id)
    return data
}

const editarProducto = async (marca, modelo, tipo, precio, descripcion, anio, id)=>{
    const {data} = await axios.put('https://0323tn-production.up.railway.app/v1/editar/' + id,{
        marca,
        modelo,
        tipo,
        precio,
        descripcion,
        anio,
    })
    return data
}

const listaproductoConToken = async (token) =>{
    //https://0323tn-production.up.railway.app/v1/list
    const {data} = await axios.get('https://0323tn-production.up.railway.app/v1/list',{
        headers:{
            JWToken: token
        }
    })
    return data
}

const guardarProdcutoConToken = async (marca, modelo, tipo, precio, descripcion, anio, token)=>{
    const {data} = await axios.post('https://0323tn-production.up.railway.app/v1/crear',{
        marca,
        modelo,
        tipo,
        precio,
        descripcion,
        anio,
    },{
        headers:{
            JWToken: token
        }  
    })
    return data
}