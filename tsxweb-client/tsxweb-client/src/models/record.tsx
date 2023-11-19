export type record ={
    height:number,
    sex:string,
    notes:string,
    contact:number,
    weight:number,
    age:number,
    chronics:string;
    currMeds:string;
}
export function get_record(props:record){
    return "I am a" + props.sex +
        ", I am " + props.age + "years old and weight " + props.weight
        + "My contacts are " + props.contact
        + ". I have " + props.chronics + ". I take " + props.currMeds+ "medications";
}