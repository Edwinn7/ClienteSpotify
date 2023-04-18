import{URI_GENERAR_TOKEN} from '/js/constantes.js'
import{PETICION_GENERAR_TOKEN} from '/js/constantes.js'

export async function generarToken(){
    let resp=await fetch(URI_GENERAR_TOKEN,PETICION_GENERAR_TOKEN)
    return resp.json()
}