export interface InterfacePasti {
    _id:string;
    giorno: number,
    mattina: Descrizione[],
    pranzo: Descrizione[],
    pomeriggio:Descrizione[],
    cena: Descrizione[],
}
export interface Descrizione{
    descrizione?:string, 
    quantita?:string,

}
