import { consumirCanciones } from "/js/servicioTop_Canciones.js";
import {pintar_canciones} from "/js/pintarCanciones.js";

let canciones=await consumirCanciones()
pintar_canciones(canciones)