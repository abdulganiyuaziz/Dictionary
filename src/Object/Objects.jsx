export default function Data() {
    
    const person = [{
        fname: 'Vincent',
        lname: 'Mensah',
        Hometown: 'Abura',
        fullname: function(){
            return this.fname + ' '+ this.lname
        }
    },
    {
        fname: 'Gabriel',
        lname: 'Tetteh',
        Hometown: 'Dome',
        fullname: function(){
            return this.fname + ' '+ this.lname
        }
    }
]

    const len = person.length
    let content = `<ul>`
    for(let i = 0; i < len; i++){
        content += `<li> ${person[i].fullname()} </li>` 
       
    }
    content += `</ul>`

    

    return(
        <>  Data from init:
            <p>Name: {person[0].fullname()}</p>
            <p>Residence: {person[0].Hometown}</p>
            {document.write(content)}
        </>
    )

}
