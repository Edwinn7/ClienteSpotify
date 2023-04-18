//
import { generarToken } from "/js/servicioGenerarToken.js"
//import{}

//1. Donde voy (conocer URI o API a consumir)
export const URI_TOP_CANCIONES='https://api.spotify.com/v1/artists/2LRoIwlKmHjgvigdNGBHNo/top-tracks?market=US'

//1.2 uri del servicio que genera tokens
export const URI_GENERAR_TOKEN='https://accounts.spotify.com/api/token'

// datos de envio (POST)
const DATO1="client_id=db16498303724bedbbb4ccdff4382421"
const DATO2="client_secret=8c03f6ca32e44114a96ff56074ec6861"
const DATO3="grant_type=client_credentials"

const DATOS_PETICION=`${DATO1}&${DATO2}&${DATO3}`

export const PETICION_GENERAR_TOKEN={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS_PETICION
}

// 2. Armo la peticion (que vas a hacer?)
// llamar la funcion que trae el token
let token= await generarToken()
const TOKEN= token.token_type+" "+token.access_token

export const PETICION_TOP_CANCIONES={
    method:"GET",
    headers:{Authorization:TOKEN}
}


