// funcion para pintar la info que llega
export function pintar_canciones(canciones){
    console.log(canciones) // objeto
    console.log(canciones.tracks) // arreglo porque se recorre
    let fila=document.getElementById("fila")

    // recorro el arreglo de canciones
    canciones.tracks.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        // crear una columna para cada cancion

        let columna=document.createElement("div")
        columna.classList.add("col")

        // crear la tarjeta

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")


        let titulo = document.createElement("p")
        titulo.textContent=cancion.name
        titulo.classList.add("card-title")

        // crear la foto
        let foto = document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        let popular = document.createElement("p")
        popular.textContent="Popularidad: "+cancion.popularity
        popular.classList.add("card-text")
        
        let explicit = document.createElement("p")
        explicit.textContent="Explicita: "+cancion.explicit
        explicit.classList.add("card-text")


        //crear audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")

        // padres e hijos
        
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(popular)
        tarjeta.appendChild(explicit)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}