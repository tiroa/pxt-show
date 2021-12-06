
//% color=190 weight=100 icon="\uf1ec" block="Mostrar Numero"
namespace show {
    /**
    * Prueba para formato de bloques
    */
    //% blockId=device_show_number
    //% block="show|number %v"
    export function showNumber(v: number, interval: number = 150): void
    { 
        let a : string = v + '0';
        basic.showString(a);
    }
    
}
