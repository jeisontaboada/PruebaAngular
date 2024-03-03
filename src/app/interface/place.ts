export default interface Place {

    id?: string;
    titulo: string;
    descripcion: string;
    fechaVencimiento: Date;
    prioridad: PrioridadTarea;
    etiquetas: string[];


}

enum PrioridadTarea {
    Baja = 'Baja',
    Media = 'Media',
    Alta = 'Alta'
  }