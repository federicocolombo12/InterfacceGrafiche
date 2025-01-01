export interface Crimine{
    category:string,location_type:string,location:
    Location,context:string,persistent_id:string,id:number,location_subtype:string,month:string
}
interface Location{
    latitude:string
    street:{id:number,name:string}
    longitude:string
}