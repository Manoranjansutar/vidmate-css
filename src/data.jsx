export const API_KEY = 'AIzaSyAGeI6LqsSc265k7Iz73E58UQNRIllifPg';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/100000) + "M"
    }
    else if(value>=1000){
       return Math.floor(value/1000) + "K"
    }
    else return value;
}