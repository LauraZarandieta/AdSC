/*
 Evento.js - Creates an event object to post to intro's event section



*/

function Evento (date, name, _evento_html) {
    this.date = date;
    this.name = name;
    this._evento_html = 
        '<div class="row">' + 
            '<div class="col-2"' + 
                '<p><strong>' + date + '</strong></p>' + 
            '</div>' +  
            '<div class="col-6"' +
                '<p>' + name + '</p>' + 
            '</div>' + 
        '</div>'    
}

var eventos = [];

var evento1 = new Evento('23.11.2022', 'Competición importante');
var evento2 = new Evento('23.12.2022', 'Exhibición importante');

eventos.push(evento1);
eventos.push(evento2);

for(i=0;i<eventos.length;i++) {
    $("#eventos div.here").append(eventos[i]._evento_html);
}
