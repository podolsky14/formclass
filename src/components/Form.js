import React from 'react';

export default class Form extends React.Component{

state = { 
 name: "",
 sex: "",
 age: "",
 maritalstatus: "",
 email: "",
 telefono: "",
 estudios: false,
 english: "",
 mensaje:"",
}    

onSubmit = (e) => {
  
    if (this.state.name === "") {
        alert("Por favor introduzca su nombre y apellido")   
    } else {console.log(e)
    }

    if (this.state.sex === "") {
        alert("Por favor introduzca su sexo")   
    } else {console.log(e)}

    if (this.state.age === "") {
        alert("Por favor introduzca su edad")   
    } else {console.log(e)}

    if (this.state.maritalstatus === "") {
        alert("Por favor introduzca su estado civil")   
    } else {console.log(e)}

    if (this.state.email === "") {
        alert("Por favor introduzca su email")   
    } else {console.log(e)}

    if (this.state.telefono === "") {
        alert("Por favor introduzca su telefono")   
    } else {console.log(e)}

    if (this.state.estudios === "") {
        alert("Por favor introduzca sus estudios")   
    } else {console.log(e)}

    if (this.state.english=== "") {
        alert("Por favor especifique si habla inglés o no")   
    } else {console.log(e)}
    
    if (this.state.mensaje=== "") {
        alert("Por favor introduzca un mensaje")   
    } else {console.log(e)}
   
    e.preventDefault()

}

onChange = (e) => {
    console.log(e.target.name, e.target.value)
this.setState({
    [e.target.name]: e.target.value
})
}

onChecked = e => {
    console.log(e.target.name, e.target.checked)
    this.setState({
        [e.target.name]: true
    })
}

    render(){
        return(  
        <div className="exterior">

<div className="contenedor">

<form className="formulario" onSubmit={this.onSubmit}>
 <input type="text" placeholder="Nombre y apellido" name="name" onChange={this.onChange} value={this.state.name}/><br/>
 <div className="contenedorsecundario">
 <label htmlFor="hombre" className="label">Hombre</label> 
 <input type="radio" name="sex" id="hombre" value="hombre" onChange={this.onChange} /> &nbsp; &nbsp;
 <label htmlFor="mujer" className="label">Mujer</label> 
 <input type="radio" name="sex" value="mujer" id="mujer" onChange={this.onChange} />
 </div>
 <br/>
 <input type="number" placeholder="Edad" name="age" onChange={this.onChange} value={this.state.age || ""}/><br/>
 <input type="text" placeholder="Estado civil" name="maritalstatus" onChange={this.onChange} value={this.state.maritalstatus || ""} /><br/>

 <input type="text" name="email" placeholder="Ingrese su e-mail" onChange={this.onChange} value={this.state.email || ""}/><br/>

 <input type="text" name="telefono" placeholder="ingrese su teléfono" onChange={this.onChange} value={this.state.telefono || ""}/> <br/>

<label htmlFor="estudios" className="label">Estudios cursados:</label>
<div className="labelcheck"><label htmlFor="estudios2" className="label2">Primaria</label> 
<input type="checkbox" name="estudios" id="primaria" value="primaria" onChange={this.onChecked}/>&nbsp; &nbsp;
<label htmlFor="estudios2" className="label2">Secundaria</label> 
<input type="checkbox" name="estudios" id="secundaria" value="secundaria" onChange={this.onChecked}/>&nbsp; &nbsp;
<label htmlFor="estudios2" className="label2">Universidad</label> 
<input type="checkbox" name="estudios" id="universidad" value="universidad" onChange={this.onChecked}/></div><br/>

 <div className="contenedorterciario">
 <label htmlFor="ingles" className="label">Habla inglés? </label> &nbsp; &nbsp;
 <label htmlFor="ingles2" className="label">Si</label>
 <input type="radio" name="english" value="yes" id="yes" onChange={this.onChange} /><br/>&nbsp; &nbsp; 
 <label htmlFor="ingles2" className="label">No</label>
 <input type="radio" name="english" value="no" id="no" onChange={this.onChange} />
 </div>

<p className="label"> Escriba a continuación porque quiere trabajar con nosotros </p>
<textarea name="mensaje" cols="50" rows="10" onChange={this.onChange} value={this.state.mensaje}/>

 <div className="contenedorcuarto">
 <input type="submit" id="submit" name="submit"/>
 </div>
 
</form>
</div>
</div>
        
        
       
        )
    }
}
