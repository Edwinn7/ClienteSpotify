import {URI_TOP_CANCIONES} from '/js/constantes.js'
import {PETICION_TOP_CANCIONES} from '/js/constantes.js'

export async function consumirCanciones(){

    let resp=await fetch(URI_TOP_CANCIONES,PETICION_TOP_CANCIONES)
    return resp.json()
}