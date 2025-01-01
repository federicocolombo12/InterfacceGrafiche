import exp from "constants";
import L from "leaflet"
import "./appartamentotorino.jpg"

export interface Casa{
    /*tipologia di offerta (affitto o vendita)
    posizione geografica (latitudine, longitudine e nome della località in cui sorge)
    ● superficie in m2
    ● numero di locali
    ● piano
    ● classe energetica (da "G" a "A+++")
    ● prezzo
    ● descrizione
    ● mappa
    ● galleria fotografica*/
    id:number,
    tipo:string,
    pos:L.LatLng,
    Area:string,
    Locali:string,
    piano:string,
    classe:string,
    prezzo:string,
    descrizione:string,
    foto:string
}
export let ListaAppartamenti:Casa[]=[
    {id:0, tipo:"Appartamento",pos:new L.LatLng(45.06467,7.656784),Area:"30mq",Locali:"1",piano:"2",classe:"2",prezzo:"1000000",
    descrizione:"Casetta in centro",foto:"https://ask4location.it/wp-content/uploads/watermarked_images/wp-content-uploads-2019-06-appartamento-contemporaneo-con-cucina-ad-isola-e-parquet-torino-per-foto-video-eventi-02-scaled.jpg"},
    {id:1, tipo:"Villa",pos:new L.LatLng(45.092033, 7.678353),Area:"20mq",Locali:"2",piano:"3",classe:"3",prezzo:"50000",
        descrizione:"Casetta Periferia",foto:"https://images.squarespace-cdn.com/content/v1/580f698c3e00bed1076cd2a3/1554330241698-4XLYTHZ78WURV2QDONKF/_MG_0966+%281%29.jpg?format=2500w"},
    {id:2, tipo:"Appartamento",pos:new L.LatLng(45.090094, 7.712685),Area:"100mq",Locali:"4",piano:"1",classe:"1",prezzo:"200000",
        descrizione:"Carina Casa",foto:"https://dati.infoelba.it/media/photos/turismo/1412/galleria/ste_0515-foto-principale.jpg?w=600&h=600&quality=90&mode=crop&scale=both"},
    {id:3, tipo:"Villa",pos:new L.LatLng(45.091295, 7.680206),Area:"53mq",Locali:"5",piano:"3",classe:"2",prezzo:"2000",
        descrizione:"Bellissima",foto:"https://ask4location.it/wp-content/uploads/watermarked_images/wp-content-uploads-2019-06-appartamento-contemporaneo-con-cucina-ad-isola-e-parquet-torino-per-foto-video-eventi-03-scaled.jpg"},
    {id:4, tipo:"Villa",pos:new L.LatLng(45.03373236106265, 7.673892397793021),Area:"48mq",Locali:"10",piano:"3",classe:"2",prezzo:"20000",
        descrizione:"Top",foto:"https://www.rivieradelconero.info/images/dormire/appartamento-nel-conero.jpg"}

]