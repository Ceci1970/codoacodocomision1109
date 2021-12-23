/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mi_aplicacion;

/**
 *
 * @author Win10
 */
public class Juego {
    public int puntos,vidas;/*declaracion de las propiedades*/
    public String personaje,enemigos,armas;
    Juego(int puntos,int vidas, String armas,String personaje,String enemigos){
        this.puntos=puntos;
        this.vidas=vidas;
        this.armas=armas;
        this.personaje=personaje;
        this.enemigos=enemigos;   
    }
    public String mostrar_vidas(){
        return "Soy " + this.personaje +" Tengo "+ this.vidas + " Vidas"; 
    }

}
